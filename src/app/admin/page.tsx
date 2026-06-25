


'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { FaqItem, homePageContent as initialHomePageContent, blogPosts as initialBlogPosts, BlogPost, newlyArrivedContent as initialNewlyArrivedContent } from '@/lib/data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Trash2, Pencil, PlusCircle, Save, XCircle, Home, Calendar, Star, Inbox, Mail, CheckCircle, Clock, Phone, AlertCircle, Menu, Heart, DollarSign, Users, LineChart, Table, LogOut } from 'lucide-react';
import { HomePageContent, ContactMessage, MessageStatus, EventStatus, Donation, DonationStatus, BlogEvent } from '@/lib/types';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { formatDate } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig } from '@/components/ui/chart';
import { BarChart, CartesianGrid, XAxis, Bar, YAxis } from 'recharts';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Table as UiTable, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useLanguage } from '@/context/language-context';
import { events as initialEvents } from '@/lib/data';


const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

const adminNavLinks = {
    en: [
        { href: '/', label: 'Home', icon: Home },
        { href: '/inbox', label: 'Inbox', icon: Inbox },
        { href: '/events', label: 'Events', icon: Calendar },
        { href: '/donations', label: 'Donations', icon: Heart },
    ],
    es: [
        { href: '/', label: 'Inicio', icon: Home },
        { href: '/inbox', label: 'Bandeja de Entrada', icon: Inbox },
        { href: '/events', label: 'Eventos', icon: Calendar },
        { href: '/donations', label: 'Donaciones', icon: Heart },
    ]
};

const eventStatusOptions: EventStatus[] = ['Upcoming', 'Completed', 'Cancelled'];

const eventSchema = z.object({
    id: z.string().optional(),
    title_en: z.string().min(1, 'English title is required.'),
    title_es: z.string().min(1, 'Spanish title is required.'),
    date: z.string().refine((val) => !isNaN(Date.parse(val)), {message: "Invalid date"}),
    location: z.string().min(1, 'Location is required.'),
    image: z.string().url('Must be a valid URL.'),
    description_en: z.string().min(1, 'English description is required.'),
    description_es: z.string().min(1, 'Spanish description is required.'),
    status: z.enum(eventStatusOptions),
});

type EventSchema = z.infer<typeof eventSchema>;

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
type LoginSchema = z.infer<typeof loginSchema>;


const content = {
    en: {
        adminAccess: 'Admin Access',
        enterPin: 'Enter 4-Digit PIN',
        unlock: 'Unlock',
        accessGranted: 'Access Granted',
        welcome: 'Welcome to the Admin Dashboard.',
        accessDenied: 'Access Denied',
        incorrectPin: 'Incorrect PIN.',
        couldNotLoadMessages: 'Could not load messages.',
        dashboard: 'Dashboard',
        statistics: 'Statistics',
        websiteVisits: 'Website Visits',
        messageStatus: 'Message Status',
        eventStatus: 'Event Status',
        inbox: 'Inbox',
        inboxEmpty: 'Your inbox is empty.',
        from: 'From',
        phone: 'Phone',
        subject: 'Subject',
        setStatus: 'Set status',
        delete: 'Delete',
        areYouSure: 'Are you sure?',
        deleteMessageConfirmation: 'This will permanently delete this message.',
        cancel: 'Cancel',
        messageDeleted: 'Message Deleted',
        couldNotDeleteMessage: 'Could not delete message.',
        couldNotUpdateMessage: 'Could not update message.',
        eventsPlanner: 'Events Planner',
        newEvent: 'New Event',
        editEvent: 'Edit Event',
        addEvent: 'Add New Event',
        title: 'Title',
        title_en: 'Title (English)',
        title_es: 'Title (Spanish)',
        date: 'Date',
        location: 'Location',
        imageURL: 'Image URL',
        description: 'Description',
        description_en: 'Description (English)',
        description_es: 'Description (Spanish)',
        status: 'Status',
        selectEventStatus: 'Select event status',
        saveChanges: 'Save Changes',
        addEventButton: 'Add Event',
        eventUpdated: 'Event Updated',
        eventAdded: 'Event Added',
        eventDeleted: 'Event Deleted',
        deleteEventConfirmation: 'This action cannot be undone. This will permanently delete this event.',
        noEventsScheduled: 'No events scheduled.',
        donations: 'Donations',
        totalRevenue: 'Total Revenue',
        donationsThisMonth: 'Donations (This Month)',
        totalDonations: 'Total Donations',
        averageDonation: 'Average Donation',
        donationsLast7Days: 'Donations - Last 7 Days',
        recentDonations: 'Recent Donations',
        allDonations: 'All Donations',
        donor: 'Donor',
        signIn: 'Sign In',
        email: 'Email',
        password: 'Password',
        signOut: 'Sign Out',
        incorrectLogin: 'Incorrect email or password.',
    },
    es: {
        adminAccess: 'Acceso de Administrador',
        enterPin: 'Ingrese el PIN de 4 dígitos',
        unlock: 'Desbloquear',
        accessGranted: 'Acceso Concedido',
        welcome: 'Bienvenido al Panel de Administrador.',
        accessDenied: 'Acceso Denegado',
        incorrectPin: 'PIN incorrecto.',
        couldNotLoadMessages: 'No se pudieron cargar los mensajes.',
        dashboard: 'Panel',
        statistics: 'Estadísticas',
        websiteVisits: 'Visitas al Sitio Web',
        messageStatus: 'Estado del Mensaje',
        eventStatus: 'Estado del Evento',
        inbox: 'Bandeja de Entrada',
        inboxEmpty: 'Tu bandeja de entrada está vacía.',
        from: 'De',
        phone: 'Teléfono',
        subject: 'Asunto',
        setStatus: 'Establecer estado',
        delete: 'Eliminar',
        areYouSure: '¿Estás seguro?',
        deleteMessageConfirmation: 'Esto eliminará permanentemente este mensaje.',
        cancel: 'Cancelar',
        messageDeleted: 'Mensaje Eliminado',
        couldNotDeleteMessage: 'No se pudo eliminar el mensaje.',
        couldNotUpdateMessage: 'No se pudo actualizar el mensaje.',
        eventsPlanner: 'Planificador de Eventos',
        newEvent: 'Nuevo Evento',
        editEvent: 'Editar Evento',
        addEvent: 'Agregar Nuevo Evento',
        title: 'Título',
        title_en: 'Título (Inglés)',
        title_es: 'Título (Español)',
        date: 'Fecha',
        location: 'Ubicación',
        imageURL: 'URL de la Imagen',
        description: 'Descripción',
        description_en: 'Descripción (Inglés)',
        description_es: 'Descripción (Español)',
        status: 'Estado',
        selectEventStatus: 'Seleccionar estado del evento',
        saveChanges: 'Guardar Cambios',
        addEventButton: 'Agregar Evento',
        eventUpdated: 'Evento Actualizado',
        eventAdded: 'Evento Agregado',
        eventDeleted: 'Evento Eliminado',
        deleteEventConfirmation: 'Esta acción no se puede deshacer. Esto eliminará permanentemente este evento.',
        noEventsScheduled: 'No hay eventos programados.',
        donations: 'Donaciones',
        totalRevenue: 'Ingresos Totales',
        donationsThisMonth: 'Donaciones (Este Mes)',
        totalDonations: 'Donaciones Totales',
        averageDonation: 'Donación Promedio',
        donationsLast7Days: 'Donaciones - Últimos 7 Días',
        recentDonations: 'Donaciones Recientes',
        allDonations: 'Todas las Donaciones',
        donor: 'Donante',
        signIn: 'Iniciar Sesión',
        email: 'Correo electrónico',
        password: 'Contraseña',
        signOut: 'Cerrar Sesión',
        incorrectLogin: 'Correo electrónico o contraseña incorrectos.',
    }
};

const EventDialog = ({ onOpenChange, onSubmit, isEditing, currentEvent, t }: { onOpenChange: (open: boolean) => void, onSubmit: (values: EventSchema) => void, isEditing: boolean, currentEvent: BlogEvent | null, t: any }) => {
    const eventForm = useForm<EventSchema>({
        resolver: zodResolver(eventSchema),
    });

    React.useEffect(() => {
        if (isEditing && currentEvent) {
            eventForm.reset({
                ...currentEvent,
                title_en: currentEvent.title.en,
                title_es: currentEvent.title.es,
                description_en: currentEvent.description.en,
                description_es: currentEvent.description.es,
                date: new Date(currentEvent.date).toISOString().split('T')[0],
            });
        } else {
            eventForm.reset({
                title_en: '',
                title_es: '',
                date: new Date().toISOString().split('T')[0],
                location: 'Online',
                image: 'https://picsum.photos/seed/newevent/800/600',
                description_en: '',
                description_es: '',
                status: 'Upcoming',
            });
        }
    }, [isEditing, currentEvent, eventForm]);


    const handleSubmit = (values: EventSchema) => {
        onSubmit(values);
        onOpenChange(false);
    };

    return (
        <DialogContent className="max-w-2xl">
            <DialogHeader>
                <DialogTitle>{isEditing ? t.editEvent : t.addEvent}</DialogTitle>
            </DialogHeader>
             <Form {...eventForm}>
                <form onSubmit={eventForm.handleSubmit(handleSubmit)} className="space-y-4 max-h-[80vh] overflow-y-auto pr-6">
                    <FormField control={eventForm.control} name="title_en" render={({ field }) => (<FormItem><FormLabel>{t.title_en}</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={eventForm.control} name="title_es" render={({ field }) => (<FormItem><FormLabel>{t.title_es}</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={eventForm.control} name="date" render={({ field }) => (<FormItem><FormLabel>{t.date}</FormLabel><FormControl><Input type="date" {...field} /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={eventForm.control} name="location" render={({ field }) => (<FormItem><FormLabel>{t.location}</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={eventForm.control} name="image" render={({ field }) => (<FormItem><FormLabel>{t.imageURL}</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={eventForm.control} name="description_en" render={({ field }) => (<FormItem><FormLabel>{t.description_en}</FormLabel><FormControl><Textarea {...field} rows={3} /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={eventForm.control} name="description_es" render={({ field }) => (<FormItem><FormLabel>{t.description_es}</FormLabel><FormControl><Textarea {...field} rows={3} /></FormControl><FormMessage /></FormItem>)} />
                    <FormField
                        control={eventForm.control}
                        name="status"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t.status}</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder={t.selectEventStatus} />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {eventStatusOptions.map(status => (
                                            <SelectItem key={status} value={status}>{status}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type="button" variant="secondary">{t.cancel}</Button>
                        </DialogClose>
                        <Button type="submit">{isEditing ? t.saveChanges : t.addEventButton}</Button>
                    </DialogFooter>
                </form>
            </Form>
        </DialogContent>
    );
};


const messageStatusOptions: MessageStatus[] = ['New', 'In Progress', 'Follow up', 'Call Back', 'Done', 'No Response'];

const chartConfig = {
  visits: {
    label: 'Visits',
    color: 'hsl(var(--primary))',
  },
} satisfies ChartConfig;

const donationChartConfig = {
  donations: {
    label: 'Donations',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

const statusIcons: { [key in MessageStatus]: React.ElementType } = {
  "New": Star,
  "In Progress": Clock,
  "Follow up": Mail,
  "Call Back": Phone,
  "Done": CheckCircle,
  "No Response": AlertCircle,
};

const eventStatusIcons: { [key in EventStatus]: React.ElementType } = {
    "Upcoming": Calendar,
    "Completed": CheckCircle,
    "Cancelled": XCircle,
};

const donationStatusBadgeVariant: { [key in DonationStatus]: "default" | "secondary" | "destructive" } = {
    "Completed": "default",
    "Pending": "secondary",
    "Failed": "destructive",
};

const ADMIN_PIN = "1234";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [isEventDialogOpen, setIsEventDialogOpen] = useState(false);
  const [editingEventId, setEditingEventId] = useState<string | null>(null);
  const [chartData, setChartData] = useState<any[]>([]);
  const [donationChartData, setDonationChartData] = useState<any[]>([]);
  const { language } = useLanguage();
  const t = content[language];
  const { toast } = useToast();

  // Local in-memory state (no database). Changes persist for the current session only.
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [events, setEvents] = useState<BlogEvent[]>(initialEvents);
  const [donations, setDonations] = useState<Donation[]>([]);
  const messagesLoading = false;
  const eventsLoading = false;
  const donationsLoading = false;
  
  useEffect(() => {
    if (donations && donations.length > 0) {
        const last7Days = Array.from({ length: 7 }, (_, i) => {
            const d = new Date();
            d.setDate(d.getDate() - i);
            return d.toISOString().split('T')[0];
        }).reverse();

        const data = last7Days.map(day => {
            const dayDonations = donations.filter(d => new Date(d.date).toISOString().startsWith(day) && d.status === 'Completed');
            const total = dayDonations.reduce((sum, d) => sum + d.amount, 0);
            return {
                date: new Date(day).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', { weekday: 'short' }),
                donations: total
            };
        });
        setDonationChartData(data);
    }
  }, [donations, language]);

  useEffect(() => {
    // This effect runs only once on mount to generate placeholder data
    // It does not depend on `isAuthenticated` to avoid re-generating on login
    if (chartData.length === 0) {
      const generateChartData = () => [
          { day: 'Mon', visits: Math.floor(Math.random() * 200) + 50 },
          { day: 'Tue', visits: Math.floor(Math.random() * 200) + 50 },
          { day: 'Wed', visits: Math.floor(Math.random() * 200) + 50 },
          { day: 'Thu', visits: Math.floor(Math.random() * 200) + 50 },
          { day: 'Fri', visits: Math.floor(Math.random() * 200) + 50 },
          { day: 'Sat', visits: Math.floor(Math.random() * 200) + 50 },
          { day: 'Sun', visits: Math.floor(Math.random() * 200) + 50 },
      ];
      setChartData(generateChartData());
    }
  }, [chartData.length]);


  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === ADMIN_PIN) {
      setIsAuthenticated(true);
      toast({ title: t.accessGranted, description: t.welcome });
    } else {
      toast({ variant: 'destructive', title: t.accessDenied, description: t.incorrectPin });
      setPin('');
    }
  };
  
  const handleAddNewEvent = () => {
    setEditingEventId(null);
    setIsEventDialogOpen(true);
  };

  const handleEditEvent = (eventId: string) => {
    setEditingEventId(eventId);
    setIsEventDialogOpen(true);
  }

  const handleDeleteEvent = async (id: string) => {
      setEvents(prev => prev.filter(e => e.id !== id));
      toast({ title: t.eventDeleted });
  };
  
  const handleEventSubmit = async (values: EventSchema) => {
    const eventData: BlogEvent = {
        id: values.id || Date.now().toString(),
        title: { en: values.title_en, es: values.title_es },
        date: new Date(values.date).toISOString(),
        location: values.location,
        image: values.image,
        description: { en: values.description_en, es: values.description_es },
        status: values.status,
    };

    if (values.id) {
        setEvents(prev => prev.map(e => (e.id === values.id ? eventData : e)));
        toast({ title: t.eventUpdated });
        setEditingEventId(null);
    } else {
        setEvents(prev => [...prev, eventData]);
        toast({ title: t.eventAdded });
    }
    setIsEventDialogOpen(false);
  };
  
  const handleDeleteMessage = async (id: string) => {
    setMessages(prev => prev.filter(m => m.id !== id));
    toast({ title: t.messageDeleted });
  };

  const updateMessageProperty = async (id: string, updates: Partial<ContactMessage>) => {
    if (!isAuthenticated) return;
    setMessages(prev => prev.map(m => (m.id === id ? { ...m, ...updates } : m)));
  };

  const handleMessageRead = (id: string) => {
      const message = messages?.find(m => m.id === id);
      if (message && !message.read) {
          updateMessageProperty(id, { read: true });
      }
  };

  const messageCounts = React.useMemo(() => {
    if (!messages) return {} as Record<MessageStatus, number>;
    return messages.reduce((acc, message) => {
        const status = message.status || 'New';
        acc[status] = (acc[status] || 0) + 1;
        return acc;
    }, {} as Record<MessageStatus, number>);
  }, [messages]);

  const eventCounts = React.useMemo(() => {
    if (!events) return {} as Record<EventStatus, number>;
    return events.reduce((acc, event) => {
        const status = event.status || 'Upcoming';
        acc[status] = (acc[status] || 0) + 1;
        return acc;
    }, {} as Record<EventStatus, number>);
  }, [events]);

  const donationStats = React.useMemo(() => {
    if (!donations) return { totalRevenue: 0, monthlyRevenue: 0, totalDonations: 0, averageDonation: 0 };
    const completedDonations = donations.filter(d => d.status === 'Completed');
    const totalRevenue = completedDonations.reduce((sum, d) => sum + d.amount, 0);
    const now = new Date();
    const thisMonthDonations = completedDonations.filter(d => {
        const donationDate = new Date(d.date);
        return donationDate.getMonth() === now.getMonth() && donationDate.getFullYear() === now.getFullYear();
    });
    const monthlyRevenue = thisMonthDonations.reduce((sum, d) => sum + d.amount, 0);
    const averageDonation = completedDonations.length > 0 ? totalRevenue / completedDonations.length : 0;
    
    return {
        totalRevenue,
        monthlyRevenue,
        totalDonations: completedDonations.length,
        averageDonation
    };
  }, [donations]);

  if (!isAuthenticated) {
    return (
      <div className="flex md:items-center justify-center min-h-screen bg-background items-start pt-32 md:pt-0">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-center font-headline text-2xl">{t.adminAccess}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePinSubmit} className="space-y-4">
              <Input
                type="password"
                placeholder={t.enterPin}
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                maxLength={4}
                className="text-center text-lg tracking-[1rem]"
              />
              <Button type="submit" className="w-full">
                {t.unlock}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  const sortedMessages = messages ? [...messages].sort((a, b) => new Date(b.receivedAt).getTime() - new Date(a.receivedAt).getTime()) : [];

  const SideNav = () => (
    <>
        <div className="flex items-center justify-between px-4 pb-6 pt-2">
            <h1 className="text-3xl font-headline font-bold text-primary">{t.dashboard}</h1>
            <Button variant="ghost" size="icon" onClick={() => setIsAuthenticated(false)}>
                <LogOut className="h-5 w-5" />
            </Button>
        </div>
        <TabsList className="flex flex-col h-auto p-0 space-y-2 rounded-none items-start bg-transparent">
          {adminNavLinks[language].map((link) => {
            const Icon = link.icon;
            const tabValue = link.label.toLowerCase().replace(/ & /g, '').replace(/\s+/g, '');
            return (
              <TabsTrigger 
                key={tabValue} 
                value={tabValue} 
                className="w-full justify-start text-base data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
              >
                <Icon className="mr-3 h-5 w-5" />
                <span>{link.label}</span>
                {link.label === (language === 'en' ? 'Inbox' : 'Bandeja de Entrada') && messages?.filter(m => !m.read).length > 0 && (
                    <Badge className="ml-auto bg-primary text-primary-foreground">{messages.filter(m => !m.read).length}</Badge>
                )}
              </TabsTrigger>
            )
          })}
        </TabsList>
    </>
  )

  const MobileNav = () => (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t">
        <TabsList className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
            {adminNavLinks[language].map((link) => {
                const tabValue = link.label.toLowerCase().replace(/ & /g, '').replace(/\s+/g, '');
                return (
                    <TabsTrigger 
                        key={tabValue} 
                        value={tabValue} 
                        className="relative flex-col h-auto py-2 text-xs data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none"
                    >
                        <div className="absolute top-0 h-1 w-10 rounded-full bg-primary transition-transform origin-center scale-x-0 data-[state=active]:scale-x-100" />
                        <link.icon className="h-6 w-6 mb-1" />
                        <span>{link.label}</span>
                        {link.label === (language === 'en' ? 'Inbox' : 'Bandeja de Entrada') && messages?.filter(m => !m.read).length > 0 && (
                            <Badge className="absolute top-1 right-2 h-4 w-4 p-0 text-[10px] justify-center bg-primary text-primary-foreground">{messages.filter(m => !m.read).length}</Badge>
                        )}
                    </TabsTrigger>
                )
            })}
        </TabsList>
    </div>
  );

  return (
    <div className="bg-background text-foreground">
       <Tabs defaultValue="home" className="md:flex w-full">
        <div className="hidden md:block sticky top-[80px] h-[calc(100vh-80px)] w-64 flex-shrink-0 bg-[hsl(var(--background-section-even))] border-r border-border p-4">
            <SideNav />
        </div>
        
        <main className="flex-1 p-4 md:p-8 overflow-y-auto md:h-[calc(100vh-80px)] pb-24 md:pb-8">
          <TabsContent value="home" className="mt-0 space-y-8">
             <h2 className="text-xl font-semibold mb-4">{t.statistics}</h2>
            <ChartContainer config={chartConfig} className="w-full h-[300px]">
                <BarChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="day"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        stroke="hsl(var(--muted-foreground))"
                        fontSize={12}
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                     <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="dot" />}
                    />
                    <Bar dataKey="visits" fill="var(--color-visits)" radius={8} />
                </BarChart>
            </ChartContainer>
            <div>
              <h2 className="text-xl font-semibold mb-4">{t.messageStatus}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                  {messageStatusOptions.map(status => {
                      const Icon = statusIcons[status];
                      const count = messageCounts[status] || 0;
                      return (
                          <Card key={status}>
                              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                  <CardTitle className="text-sm font-medium">{status}</CardTitle>
                                  <Icon className="h-4 w-4 text-muted-foreground" />
                              </CardHeader>
                              <CardContent>
                                  <div className="text-2xl font-bold">{count}</div>
                              </CardContent>
                          </Card>
                      );
                  })}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">{t.eventStatus}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {eventStatusOptions.map(status => {
                        const Icon = eventStatusIcons[status];
                        const count = eventCounts[status] || 0;
                        return (
                            <Card key={status}>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">{status}</CardTitle>
                                    <Icon className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{count}</div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
          </TabsContent>
          <TabsContent value={language === 'en' ? 'inbox' : 'bandejadeentrada'} className="mt-0">
             <Card>
                <CardHeader>
                    <CardTitle>{t.inbox}</CardTitle>
                </CardHeader>
                <CardContent>
                    {messagesLoading ? (
                        <p>Loading messages...</p>
                    ) : sortedMessages.length === 0 ? (
                        <p className="text-muted-foreground text-center py-8">{t.inboxEmpty}</p>
                    ) : (
                        <div className="space-y-4">
                            {sortedMessages.map((message) => (
                                <Card key={message.id} className="p-4" onClick={() => handleMessageRead(message.id)}>
                                    <div className="flex items-start gap-4">
                                        {!message.read && <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />}
                                        <div className="flex-grow">
                                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                                                <div className="flex-grow">
                                                    <p className="font-bold">{message.subject}</p>
                                                    <p className="text-sm text-muted-foreground">{t.from}: {message.name} &lt;{message.email}&gt;</p>
                                                    {message.phone && <p className="text-sm text-muted-foreground">{t.phone}: {message.phone}</p>}
                                                </div>
                                                <p className="text-xs text-muted-foreground mt-2 sm:mt-0">{formatDate(new Date(message.receivedAt))}</p>
                                            </div>
                                            
                                            <div className="prose prose-sm dark:prose-invert prose-p:text-muted-foreground bg-muted/20 p-3 rounded-md mt-2">
                                                <p>{message.message}</p>
                                            </div>

                                            <div className="flex justify-end items-center gap-2 pt-4 mt-2 border-t border-border">
                                                <Select
                                                    value={message.status}
                                                    onValueChange={(newStatus: MessageStatus) => {
                                                        updateMessageProperty(message.id, { status: newStatus });
                                                    }}
                                                >
                                                    <SelectTrigger className="w-full md:w-[180px]">
                                                        <SelectValue placeholder={t.setStatus} />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {messageStatusOptions.map(status => (
                                                            <SelectItem key={status} value={status}>{status}</SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>

                                                <AlertDialog>
                                                    <AlertDialogTrigger asChild>
                                                        <Button variant="outline" size="icon" className="text-destructive hover:text-destructive">
                                                            <Trash2 className="h-4 w-4" />
                                                        </Button>
                                                    </AlertDialogTrigger>
                                                    <AlertDialogContent>
                                                        <AlertDialogHeader>
                                                            <AlertDialogTitle>{t.areYouSure}?</AlertDialogTitle>
                                                            <AlertDialogDescription>{t.deleteMessageConfirmation}</AlertDialogDescription>
                                                        </AlertDialogHeader>
                                                        <AlertDialogFooter>
                                                            <AlertDialogCancel>{t.cancel}</AlertDialogCancel>
                                                            <AlertDialogAction onClick={() => handleDeleteMessage(message.id)}>{t.delete}</AlertDialogAction>
                                                        </AlertDialogFooter>
                                                    </AlertDialogContent>
                                                </AlertDialog>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    )}
                </CardContent>
             </Card>
          </TabsContent>
          <TabsContent value="events" className="mt-0 space-y-6">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>{t.eventsPlanner}</CardTitle>
                     <Dialog open={isEventDialogOpen} onOpenChange={setIsEventDialogOpen}>
                        <DialogTrigger asChild>
                            <Button onClick={handleAddNewEvent}><PlusCircle className="mr-2 h-4 w-4" /> {t.newEvent}</Button>
                        </DialogTrigger>
                        <EventDialog 
                            onOpenChange={setIsEventDialogOpen}
                            onSubmit={handleEventSubmit}
                            isEditing={!!editingEventId}
                            currentEvent={events?.find(e => e.id === editingEventId) || null}
                            t={t}
                        />
                    </Dialog>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                         {eventsLoading ? (
                             <p>Loading events...</p>
                         ) : events && events.length > 0 ? (
                            events.map(event => (
                                <Card key={event.id} className="flex flex-col md:flex-row items-start p-4 gap-4">
                                    <Image src={event.image} alt={event.title.en} width={150} height={100} className="rounded-md object-cover w-full md:w-[150px] h-32 md:h-auto" />
                                    <div className="flex-grow">
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <h3 className="font-bold">{event.title[language as keyof typeof event.title]}</h3>
                                            <Badge variant={event.status === 'Upcoming' ? 'default' : (event.status === 'Completed' ? 'secondary' : 'destructive')}>{event.status}</Badge>
                                        </div>
                                        <p className="text-sm text-muted-foreground">{formatDate(new Date(event.date))} - {event.location}</p>
                                        <p className="text-sm mt-2">{event.description[language as keyof typeof event.description]}</p>
                                    </div>
                                    <div className="flex gap-2 self-start md:self-center">
                                        <Button variant="ghost" size="icon" onClick={() => handleEditEvent(event.id)}>
                                            <Pencil className="h-4 w-4" />
                                        </Button>
                                        <AlertDialog>
                                            <AlertDialogTrigger asChild>
                                                <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </AlertDialogTrigger>
                                            <AlertDialogContent>
                                                <AlertDialogHeader>
                                                    <AlertDialogTitle>{t.areYouSure}?</AlertDialogTitle>
                                                    <AlertDialogDescription>{t.deleteEventConfirmation}</AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                    <AlertDialogCancel>{t.cancel}</AlertDialogCancel>
                                                    <AlertDialogAction onClick={() => handleDeleteEvent(event.id)}>{t.delete}</AlertDialogAction>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                    </div>
                                </Card>
                            ))
                        ) : (
                            <p className="text-muted-foreground text-center py-8">{t.noEventsScheduled}</p>
                        )}
                    </div>
                </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="donations" className="mt-0 space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{t.totalRevenue}</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">${donationStats.totalRevenue.toLocaleString()}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{t.donationsThisMonth}</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">${donationStats.monthlyRevenue.toLocaleString()}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{t.totalDonations}</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+{donationStats.totalDonations}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{t.averageDonation}</CardTitle>
                        <LineChart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">${donationStats.averageDonation.toFixed(2)}</div>
                    </CardContent>
                </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="lg:col-span-4">
                    <CardHeader>
                        <CardTitle>{t.donationsLast7Days}</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <ChartContainer config={donationChartConfig} className="w-full h-[300px]">
                            <BarChart data={donationChartData}>
                                <CartesianGrid vertical={false} />
                                <XAxis dataKey="date" tickLine={false} tickMargin={10} axisLine={false} stroke="hsl(var(--muted-foreground))" fontSize={12} />
                                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={(value) => `$${value}`} />
                                <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
                                <Bar dataKey="donations" fill="var(--color-donations)" radius={4} />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
                <Card className="lg:col-span-3">
                    <CardHeader>
                        <CardTitle>{t.recentDonations}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4 max-h-[300px] overflow-y-auto">
                            {donationsLoading ? <p>Loading...</p> : donations?.slice(0, 10).map(donation => (
                                <div key={donation.id} className="flex items-center">
                                    <div className="flex-grow">
                                        <p className="text-sm font-medium leading-none">{donation.name}</p>
                                        <p className="text-sm text-muted-foreground">{donation.email}</p>
                                    </div>
                                    <div className="ml-auto font-medium">${donation.amount.toLocaleString()}</div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
             <Card>
                <CardHeader>
                    <CardTitle>{t.allDonations}</CardTitle>
                </CardHeader>
                <CardContent>
                    <UiTable>
                        <TableHeader>
                            <TableRow>
                                <TableHead>{t.donor}</TableHead>
                                <TableHead className="hidden sm:table-cell">{t.status}</TableHead>
                                <TableHead className="hidden md:table-cell">{t.date}</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {donationsLoading ? (
                                <TableRow><TableCell colSpan={4}>Loading...</TableCell></TableRow>
                            ) : donations?.map(donation => (
                                <TableRow key={donation.id}>
                                    <TableCell>
                                        <div className="font-medium">{donation.name}</div>
                                        <div className="text-sm text-muted-foreground md:hidden">{formatDate(new Date(donation.date))}</div>
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        <Badge variant={donationStatusBadgeVariant[donation.status]}>{donation.status}</Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">{formatDate(new Date(donation.date))}</TableCell>
                                    <TableCell className="text-right">${donation.amount.toLocaleString()}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </UiTable>
                </CardContent>
            </Card>
          </TabsContent>
        </main>
        <MobileNav />
      </Tabs>
    </div>
  );
}
