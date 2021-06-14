export default {
  key: {
    // UptimeRobot API Key
    uptimerobot: '',
  },
  page: {
    // Website Settings
    favicon: '/favicon.ico',
    title: 'Status Page',
    description: 'A status page based on UptimeRobot API.',

    // Custom Settings
    theme: 'light', // light or dark
    contrast: 'normal', // normal or high

    header: {
      enabled: true,
      title: {
        show: true,
        content: 'Status Page',
      },
      description: {
        show: true,
        content: 'This is a demo site, and here is the description',
      },
      logo: {
        show: true,
        url: '/logo.svg',
      },
    },

    global_status: {
      enabled: true,
    },

    footer: {
      enabled: true,
      links: [
        {
          name: 'GitHub',
          url: 'https://github.com/Lifeni/status-page',
        },
        {
          name: 'UptimeRobot',
          url: 'https://stats.uptimerobot.com/Zp7JwiMqY1',
        },
      ],
    },
  },
}
