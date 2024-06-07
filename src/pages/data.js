// pages/database.js

import { useEffect, useState } from 'react';
import styles from './database.module.css';

export default function Database() {
  const [dataSources, setDataSources] = useState([]);
  const [apiLogs, setApiLogs] = useState([]);
  const [userActivities, setUserActivities] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const [dataSourcesRes, apiLogsRes, userActivitiesRes, subscriptionsRes, alertsRes] = await Promise.all([
          fetch('http://localhost:8080/api/data-sources'),
          fetch('http://localhost:8080/api/api-integration-logs'),
          fetch('http://localhost:8080/api/user-activities'),
          fetch('http://localhost:8080/api/subscriptions'),
          fetch('http://localhost:8080/api/alerts'),
        ]);

        const [dataSources, apiLogs, userActivities, subscriptions, alerts] = await Promise.all([
          dataSourcesRes.json(),
          apiLogsRes.json(),
          userActivitiesRes.json(),
          subscriptionsRes.json(),
          alertsRes.json(),
        ]);

        setDataSources(dataSources);
        setApiLogs(apiLogs);
        setUserActivities(userActivities);
        setSubscriptions(subscriptions);
        setAlerts(alerts);
      } catch (error) {
        setError('Erro ao carregar os dados do banco.');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Base de Dados</h1>
        <p>Informações das tabelas do banco de dados.</p>
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <h2>Data Sources</h2>
          <ul>
            {dataSources.map((source) => (
              <li key={source.id}>
                <p><strong>Source Name:</strong> {source.sourceName}</p>
                <p><strong>API URL:</strong> {source.apiUrl}</p>
                <p><strong>Created At:</strong> {new Date(source.createdAt).toLocaleString()}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.section}>
          <h2>API Integration Logs</h2>
          <ul>
            {apiLogs.map((log) => (
              <li key={log.id}>
                <p><strong>Data Source ID:</strong> {log.dataSourceId}</p>
                <p><strong>Status:</strong> {log.status}</p>
                <p><strong>Response Time:</strong> {log.responseTime}</p>
                <p><strong>Created At:</strong> {new Date(log.createdAt).toLocaleString()}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.section}>
          <h2>User Activities</h2>
          <ul>
            {userActivities.map((activity) => (
              <li key={activity.id}>
                <p><strong>User ID:</strong> {activity.userId}</p>
                <p><strong>Activity Type:</strong> {activity.activityType}</p>
                <p><strong>Description:</strong> {activity.description}</p>
                <p><strong>Created At:</strong> {new Date(activity.createdAt).toLocaleString()}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.section}>
          <h2>Subscriptions</h2>
          <ul>
            {subscriptions.map((subscription) => (
              <li key={subscription.id}>
                <p><strong>User ID:</strong> {subscription.userId}</p>
                <p><strong>Subscription Date:</strong> {new Date(subscription.subscriptionDate).toLocaleDateString()}</p>
                <p><strong>Subscription Type:</strong> {subscription.subscriptionType}</p>
                <p><strong>Created At:</strong> {new Date(subscription.createdAt).toLocaleString()}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.section}>
          <h2>Alerts</h2>
          <ul>
            {alerts.map((alert) => (
              <li key={alert.id}>
                <p><strong>User ID:</strong> {alert.userId}</p>
                <p><strong>Alert Date:</strong> {new Date(alert.alertDate).toLocaleDateString()}</p>
                <p><strong>Message:</strong> {alert.message}</p>
                <p><strong>Status:</strong> {alert.status}</p>
                <p><strong>Created At:</strong> {new Date(alert.createdAt).toLocaleString()}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 Nossa Comunidade. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
