export default [
  {
    _id: '/',
    _title: '总览',
    _url: '',
    _subMenus: []
  },
  {
    _id: 'console',
    _title: '控制台',
    _url: '',
    _subMenus: []
  },
  {
    _id: 'statistic-analysis',
    _title: '统计分析',
    _url: '',
    _subMenus: [
      {
        _id: 'capacity-mgmt',
        _icon: 'ucmp-icon-capacity-mgmt',
        _title: '容量概览',
        _url: '/capacity-mgmt'
      },
      // {
      //   _id: 'capacity-analysis',
      //   _icon: 'ucmp-icon-capacity-analysis',
      //   _title: '容量分析',
      //   _url: '/capacity-analysis'
      // },
      {
        _id: 'resourceIndex',
        _icon: 'ucmp-icon-resource-employ',
        _title: '资源使用统计',
        _url: '/resourceIndex'
      },
      {
        _id: 'costAnalysis',
        _icon: 'ucmp-icon-cost-analysis',
        _title: '成本分析',
        _url: '/costAnalysis'
      }
      // {
      //   _id: 'appDesktopStatistics',
      //   _icon: 'ucmp-icon-app-desktop-statistics',
      //   _title: '桌面(应用)使用统计',
      //   _url: '/appDesktopStatistics'
      // },
      // {
      //   _id: 'capacity-suggestion',
      //   _icon: 'ucmp-icon-capacity-suggestion',
      //   _title: '容量优化建议',
      //   _url: '/capacity-suggestion'
      // }
    ]
  },
  {
    _id: 'iaas',
    _title: '云基础架构',
    _url: '',
    _subMenus: [
      {
        _id: 'cloud-provider',
        _icon: 'ucmp-icon-cloud-provider',
        _title: '云厂商',
        _url: '/cloud-provider'
      },
      {
        _id: 'resource-pool',
        _icon: 'ucmp-icon-resource-pool',
        _title: '资源池管理',
        _url: '/resource-pool'
      },
      {
        _id: 'virtual-app',
        _icon: 'ucmp-icon-virtual-app',
        _title: '虚拟桌面',
        _url: '/virtual-app'
      },
      {
        _id: 'history',
        _icon: 'ucmp-icon-history',
        _title: '历史会话',
        _url: '/history'
      },
      {
        _id: 'template-define',
        _icon: 'ucmp-icon-template-define',
        _title: '镜像管理',
        _url: '/template-define'
      },
      {
        _id: 'subnet',
        _icon: 'ucmp-icon-subnet',
        _title: '网络管理',
        _url: '/subnet'
      },
      {
        _id: 'custom-device',
        _icon: 'ucmp-icon-custom-device',
        _title: '设备管理',
        _url: '/custom-device'
      },
      {
        _id: 'ssh',
        _icon: 'ucmp-icon-kepair',
        _title: 'SSH 密钥',
        _url: '/ssh'
      },
      {
        _id: 'firewall',
        _icon: 'ucmp-icon-firewall',
        _title: '防火墙管理',
        _url: '/firewall'
      }
    ]
  },
  {
      _id: 'tickets',
      _title: '工单管理',
      _url: '',
      _subMenus: [{
          _id: 'ticketMgmt',
          _icon: 'ucmp-icon-tickets',
          _title: '工单管理',
          _url: '/tickets'
      }]
  },
  {
    _id: 'app-center',
    _icon: '',
    _title: '应用编排',
    _url: '',
    _subMenus: [
      {
        _id: 'blue-print-define',
        _icon: 'ucmp-icon-blueprint-define',
        _title: '蓝图定义',
        _url: '/blue-print-define'
      }
    ]
  },
  {
    _id: 'operation-management',
    _icon: '',
    _title: '运营管理',
    _url: '',
    _subMenus: [
      {
        _id: 'service-define',
        _icon: 'ucmp-icon-service-define',
        _title: '服务发布',
        _url: '/service-define'
      },
      {
        _id: 'service-package',
        _icon: 'ucmp-icon-service-package',
        _title: '服务套餐',
        _url: '/service-package'
      },
      {
        _id: 'processDefinition',
        _icon: 'ucmp-icon-service-package',
        _title: '流程定义',
        _url: '/processDefinition'
      },
      {
        _id: 'cost-rule',
        _icon: 'ucmp-icon-service-package',
        _title: '计费规则',
        _url: '/cost-rule'
      },
      {
        _id: 'quota',
        _icon: '',
        _title: '配额管理',
        _url: '/quota'
      }
    ]
  },
  {
    _id: 'monitor-alarm',
    _icon: '',
    _title: '监控告警',
    _url: '',
    _subMenus: [
      {
        _id: 'application',
        _icon: '',
        _title: '监控仪表盘',
        _url: '/monitor-dashboard'
      },
      {
        _id: 'monitor-details',
        _icon: 'ucmp-icon-monitor-details',
        _title: '监控详情',
        _url: '/monitor-details'
      },
      // {
      //   _id: 'iaas-monitor',
      //   _icon: 'ucmp-icon-IaaS-monitor',
      //   _title: 'Iaas监控',
      //   _url: '/iaas-monitor'
      // },
      {
        _id: 'alarm-indexs',
        _icon: 'ucmp-icon-alarm-indexs',
        _title: '告警统计',
        _url: '/alarm-indexs'
      },

      {
        _id: 'alarm-index',
        _icon: 'ucmp-icon-alarm-index',
        _title: '告警管理',
        _url: '/alarm-index'
      },
      {
        _id: 'alarm',
        _icon: 'ucmp-icon-alarm',
        _title: '告警策略',
        _url: '/alarm'
      }
    ]
  },
  {
    _id: 'personal-center',
    _icon: '',
    _title: '个人中心',
    _url: '',
    _subMenus: [
      {
        _id: 'orders',
        _icon: 'ucmp-icon-orders',
        _title: '订单管理',
        _url: '/orders'
      },
      {
        _id: 'approve',
        _icon: 'ucmp-icon-approve',
        _title: '审批管理',
        _url: '/approve'
      },
      {
        _id: 'task',
        _icon: 'ucmp-icon-tasks',
        _title: '任务管理',
        _url: '/task'
      }
    ]
  },
  {
    _id: 'sys',
    _icon: '',
    _title: '系统管理',
    _url: '',
    _subMenus: [
      {
        _id: 'global-param',
        _icon: 'ucmp-icon-global-param',
        _title: '全局参数',
        _url: '/global-param'
      },
      {
        _id: 'operation-configuration',
        _icon: 'ucmp-icon-operation-configuration',
        _title: '系统配置',
        _url: '/operation-configuration'
      },
      {
        _id: 'operlogd',
        _icon: 'ucmp-icon-operlog',
        _title: '操作日志',
        _url: '/operlog'
      }
    ]
  }
]
