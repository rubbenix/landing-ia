import { Grid, Container, Title, Text, Group } from '@mantine/core';
import { IconBrandGithubCopilot, IconCurrentLocation, IconPackage, IconSettingsAutomation } from '@tabler/icons-react';
import styles from './Home.module.css';

const data = [
    {
        icon: <IconBrandGithubCopilot size={24} />,
        title: 'Cotizaciones Inteligentes',
        description: 'Obtén cotizaciones rápidas y eficientes con nuestra inteligencia artificial.',
    },
    {
        icon: <IconSettingsAutomation size={24} />,
        title: 'Procesamiento Masivo Simplificado',
        description: 'Cotiza en masa de manera sencilla con nuestra avanzada tecnología.',
    },
    {
        icon: <IconCurrentLocation size={24} />,
        title: 'Seguimiento en Tiempo Real',
        description: 'Consulta el estado de tus envíos de forma rápida y precisa.',
    },
    {
        icon: <IconPackage size={24} />,
        title: 'Gestión Ágil de Órdenes',
        description: 'Registra y gestiona tus órdenes de carga fácilmente.',
    },
];

const BenefitsCards = () => {
    return (
        <Container
            sx={{
                padding: '2rem',
                backgroundColor: '#f9f9f9',
                borderRadius: '12px',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.05)',
                maxWidth: '1200px',
                margin: '0 auto',
            }}
        >
            <Title className={styles.customTitle}>
                Conoce los BENEFICIOS de nuestra I.A
            </Title>

            <Grid gutter="xl">
                {data.map((item, index) => (
                    <Grid.Col
                        key={index}
                        sm={6}
                        md={4}
                        lg={3}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '1rem',
                        }}
                    >
                        <Group
                            align="flex-start"
                            noWrap
                            className={styles.cardContainer}
                        >
                            {/* Icono */}
                            <div className={styles.iconWrapper}>
                                {item.icon}
                            </div>

                            {/* Texto */}
                            <div>
                                <Text className={styles.cardTextTitle} size="lg">{item.title}</Text>
                                <Text color="dimmed" size="sm">{item.description}</Text>
                            </div>
                        </Group>
                    </Grid.Col>
                ))}
            </Grid>
        </Container>
    );
};

export default BenefitsCards;
