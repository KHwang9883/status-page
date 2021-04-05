export default {
  key: {
    // UptimeRobot API Key
    uptimerobot: 'ur1047124-c17f135f8eab023bb4b6987b',
  },
  page: {
    // Website Settings
    favicon: '/favicon.ico',
    title: 'Status Page | 记录干杯',
    description: '一个简单的服务监控页面，基于 UptimeRobot 的接口。',
    theme: 'light', // light or dark
    contrast: 'normal', // normal or high

    header: {
      enabled: true,
      title: {
        show: false,
        content: 'Status Page',
      },
      description: {
        show: false,
        content: 'This is a demo site, and here is the description',
      },
      logo: {
        show: true,
        url: 'https://file.lifeni.life/status/site.svg',
      },
    },

    global_status: {
      enabled: false,
    },

    footer: {
      enabled: false,
      links: [
        {
          name: 'GitHub',
          url: 'https://github.com/Lifeni/status-page',
        },
        {
          name: 'UptimeRobot',
          url: 'https://uptimerobot.com',
        },
      ],
    },
  },
}
