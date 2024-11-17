
import { Grid, Container, Title, Text, Group } from '@mantine/core';
import { IconBrandGithubCopilot, IconCurrentLocation, IconPackage, IconSettingsAutomation } from '@tabler/icons-react';
import styles from "./Home.module.css";

const data = [
    {
        icon: <IconBrandGithubCopilot size={24} />,
        title: 'Cotizaciones Inteligentes',
        description: 'Obtén cotizaciones de manera más rápida y eficiente gracias a nuestra nueva IA.',
    },
    {
        icon: <IconSettingsAutomation size={24} />,
        title: 'Procesamiento Masivo Simplificado',
        description: 'Realiza múltiples cotizaciones de forma sencilla e intuitiva con nuestra tecnología.',
    },
    {
        icon: <IconCurrentLocation size={24} />,
        title: 'Seguimiento en Tiempo Real',
        description: 'Consulta el estado y ubicación de tus envíos con mayor rapidez y precisión.',
    },
    {
        icon: <IconPackage size={24} />,
        title: 'Gestión Ágil de Órdenes',
        description: 'Registra y administra tus órdenes de carga de manera fácil e intuitiva.',
    },
];


const BenefitsCards = () => {
    return (
        <Container
            sx={{
                padding: '2rem',
                backgroundColor: '#f9f9f9',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                maxWidth: '1200px',
                margin: '0 auto',
            }}
        >
            <Title className={styles.customtitle}>
                Todo Ventajas! 🚀
            </Title>

            <Grid gutter="md">
                {data.map((item, index) => (
                    <Grid.Col
                        key={index}
                        sm={6}
                        md={4}
                        sx={{
                            display: 'flex',
                            alignItems: 'start',
                            justifyContent: 'center',
                            padding: '1rem',
                        }}
                    >
                        <Group
                            align="flex-start"
                            noWrap
                            sx={{
                                backgroundColor: '#ffffff',
                                padding: '1rem',
                                borderRadius: '8px',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                                width: '100%',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#7FFFFF',
                                    color: '#003366',
                                    borderRadius: '50%',
                                    width: '40px',
                                    height: '40px',
                                }}
                            >
                                {item.icon}
                            </div>
                            <div>
                                <Text weight={500} size="lg" mb="xs" sx={{ color: '#003366' }}>
                                    {item.title}
                                </Text>
                                <Text color="dimmed" size="sm">
                                    {item.description}
                                </Text>
                            </div>
                        </Group>
                    </Grid.Col>
                ))}
            </Grid>
        </Container>
    );
};
export default BenefitsCards;
