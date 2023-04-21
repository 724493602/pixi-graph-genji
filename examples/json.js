export const data1 = () => ({
  classes: [
    { id: '机构1', name: '机构', rgb: '#8470A8', properties: [], level: 1 },
    { id: '机构2', name: '机构', rgb: '#8470A8', properties: [], level: 2 },
    { id: '机构3', name: '机构', rgb: '#8470A8', properties: [], level: 2 },
    { id: '机构5', name: '机构', rgb: '#8470A8', properties: [], level: 2 },
    { id: '机构6', name: '机构', rgb: '#8470A8', properties: [], level: 2 },
    { id: '机构7', name: '机构', rgb: '#8470A8', properties: [], level: 2 },
    { id: '机构', name: '机构', rgb: '#8470A8', properties: [], level: 2 },
    { id: '政策', name: '政策', rgb: '#83A3D7', properties: [], level: 3 },
    { id: '意图', name: '意图', rgb: '#DF954E', properties: [], level: 3 },
    { id: '场所', name: '场所', rgb: '#DF954E', properties: [], level: 3 },
    {
      id: '解决方案',
      name: '解决方案',
      rgb: 'rgba(253, 0, 194, 1)',
      properties: [],
      level: 2
    },
    {
      id: '企业',
      name: '企业',
      rgb: 'rgba(4, 255, 0, 1)',
      properties: ['注册资本'],
      level: 2
    },
    {
      id: '应用场景',
      name: '应用场景',
      rgb: '#7086A8',
      properties: [],
      level: 2
    },
    { id: '案例', name: '案例', rgb: '#64B3C0', properties: [], level: 2 },
    { id: '系统', name: '系统', rgb: '#768467', properties: [], level: 2 },
    { id: '事例', name: '事例', rgb: '#939F96', properties: [], level: 3 },
    { id: '角色', name: '角色', rgb: '#7070A8', properties: [], level: 3 },
    { id: '人', name: '人', rgb: '#76999F', properties: [], level: 3 },
    { id: '文章', name: '文章', rgb: '#939F96', properties: [], level: 3 },
    { id: '物体', name: '物体', rgb: '#505C59', properties: [], level: 3 },
    {
      id: '物体状态',
      name: '物体状态',
      rgb: '#6EA3FD',
      properties: [],
      level: 3
    },
    { id: '功能', name: '功能', rgb: '#8470A8', properties: [], level: 3 },
    {
      id: '指标类型',
      name: '指标类型',
      rgb: '#ADCAF1',
      properties: [],
      level: 3
    },
    {
      id: '度量指标',
      name: '度量指标',
      rgb: '#7086A8',
      properties: [],
      level: 3
    },
    { id: '指标', name: '指标', rgb: '#7086A8', properties: [] },
    {
      id: '硬件',
      name: '硬件',
      rgb: 'rgba(255, 0, 0, 1)',
      properties: ['型号', '重量', '颜色', '材质']
    },
    { id: '技术', name: '技术', rgb: '#7070A8', properties: [] },
    { id: '软件', name: '软件', rgb: '#CBCCC0', properties: [] },
    { id: '供电方式', name: '供电方式', rgb: '#76999F', properties: [] },
    { id: '接口', name: '接口', rgb: '#C6986D', properties: [] },
    { id: '品牌', name: '品牌', rgb: '#CBCCC0', properties: [] },
    { id: '人物画像', name: '人物画像', rgb: '#DF954E', properties: [] },
    { id: '服务', name: '服务', rgb: '#C6986D', properties: [] },
    { id: '接口类型', name: '接口类型', rgb: '#DF954E', properties: [] },
    { id: '通讯协议', name: '通讯协议', rgb: '#6EA3FD', properties: [] },
    { id: '场所状态', name: '场所状态', rgb: '#CBCCC0', properties: [] },
    { id: '行业', name: '行业', rgb: '#425B8A', properties: [] },
    {
      id: '荣誉资质',
      name: '荣誉资质荣誉资质荣誉资质荣誉资质',
      rgb: '#768467',
      properties: []
    },
    { id: '企业画像', name: '企业画像', rgb: '#83A3D7', properties: [] },
    { id: '项目', name: '项目', rgb: '#425B8A', properties: [] },
    { id: '专利软著', name: '专利软著', rgb: '#A47878', properties: [] },
    { id: '主题', name: '主题', rgb: '#C6986D', properties: [] }
  ],
  edges: [
    {
      id: '包含场景',
      name: '包含场景',
      fromClass: '解决方案',
      toClass: '应用场景'
    },
    {
      id: '相关案例',
      name: '相关案例',
      fromClass: '解决方案',
      toClass: '案例'
    },
    { id: 'yyzb', name: '拥有指标', fromClass: '硬件', toClass: '指标' },
    { id: '适用于', name: '适用于', fromClass: '解决方案', toClass: '机构' },
    { id: 'yongyou', name: '拥有', fromClass: '企业', toClass: '荣誉资质' },
    { id: 'gdfs', name: '供电方式', fromClass: '硬件', toClass: '供电方式' },
    {
      id: '包含系统',
      name: '包含系统',
      fromClass: '解决方案',
      toClass: '系统'
    },
    {
      id: '相关场景',
      name: '相关场景',
      fromClass: '系统',
      toClass: '应用场景'
    },
    {
      id: '相关事例',
      name: '相关事例',
      fromClass: '应用场景',
      toClass: '事例'
    },
    { id: '相关角色', name: '相关角色', fromClass: '事例', toClass: '角色' },
    { id: '管理对象', name: '管理对象', fromClass: '系统', toClass: '角色' },
    { id: '拥有角色1', name: ' 拥有角色', fromClass: '人', toClass: '角色' },
    { id: '作者', name: '作者', fromClass: '文章', toClass: '人' },
    { id: '所属企业', name: '所属企业', fromClass: '文章', toClass: '企业' },
    { id: '相关物体', name: '相关物体', fromClass: '功能', toClass: '物体' },
    { id: '相关物体1', name: '相关物体', fromClass: '事例', toClass: '物体' },
    {
      id: '相关物体2',
      name: '相关物体',
      fromClass: '物体',
      toClass: '指标类型'
    },
    {
      id: '相关状态',
      name: '相关状态',
      fromClass: '指标类型',
      toClass: '物体状态'
    },
    {
      id: '相关指标',
      name: '相关指标',
      fromClass: '功能',
      toClass: '指标类型'
    },
    { id: '推出', name: '推出', fromClass: '机构', toClass: '政策' },
    { id: '相关政策', name: '相关政策', fromClass: '意图', toClass: '政策' },
    {
      id: '相关度量',
      name: '相关度量',
      fromClass: '指标类型',
      toClass: '度量指标'
    },
    { id: '使用技术', name: '使用技术', fromClass: '硬件', toClass: '技术' },
    { id: '包含软件', name: '包含软件', fromClass: '系统', toClass: '软件' },
    { id: '使用技术1', name: '使用技术', fromClass: '软件', toClass: '技术' },
    { id: '拥有接口', name: '拥有接口', fromClass: '硬件', toClass: '接口' },
    { id: '描述', name: '描述', fromClass: '人物画像', toClass: '人' },
    { id: '包含服务', name: '包含服务', fromClass: '系统', toClass: '服务' },
    { id: '包含硬件', name: '包含硬件', fromClass: '系统', toClass: '硬件' },
    { id: '管理对象1', name: '管理对象', fromClass: '系统', toClass: '物体' },
    {
      id: '所属类型1',
      name: '所属类型',
      fromClass: '接口',
      toClass: '接口类型'
    },
    {
      id: '使用协议',
      name: '使用协议',
      fromClass: '接口',
      toClass: '通讯协议'
    },
    { id: '包含功能', name: '包含功能', fromClass: '系统', toClass: '功能' },
    {
      id: '包含场景1',
      name: '包含场景',
      fromClass: '行业',
      toClass: '应用场景'
    },
    { id: '包含角色', name: '包含角色', fromClass: '行业', toClass: '角色' },
    { id: '相关行业', name: '相关行业', fromClass: '文章', toClass: '行业' },
    {
      id: '所属行业',
      name: '所属行业',
      fromClass: '解决方案',
      toClass: '行业'
    },
    { id: '相关政策1', name: '相关政策', fromClass: '行业', toClass: '政策' },
    { id: '相关行业1', name: '相关行业', fromClass: '意图', toClass: '行业' },
    { id: '描述1', name: '描述', fromClass: '企业画像', toClass: '企业' },
    { id: 'yongyou1', name: '拥有', fromClass: '企业', toClass: '专利软著' },
    { id: '中标', name: '中标', fromClass: '项目', toClass: '企业' },
    { id: '宣传项目', name: '宣传项目', fromClass: '案例', toClass: '项目' },
    { id: '业主', name: '业主', fromClass: '案例', toClass: '企业' },
    { id: '供应方', name: '供应方', fromClass: '案例', toClass: '企业' },
    { id: '包含物体', name: '包含物体', fromClass: '场所', toClass: '物体' },
    {
      id: '拥有状态',
      name: '拥有状态',
      fromClass: '场所',
      toClass: '场所状态'
    },
    { id: '相关主题', name: '相关主题', fromClass: '意图', toClass: '主题' },
    { id: '相关场所', name: '相关场所', fromClass: '行业', toClass: '场所' },
    { id: '供职于', name: '供职于', fromClass: '人', toClass: '企业' },
    { id: '项目方', name: '项目方', fromClass: '项目', toClass: '企业' },
    { id: '项目方1', name: '项目方', fromClass: '项目', toClass: '机构' },
    { id: 'sslx', name: '所属类型', fromClass: '指标', toClass: '指标类型' },
    { id: 'yypp', name: '拥有品牌', fromClass: '硬件', toClass: '品牌' }
  ]
});

export const data2 = () => {
  return {
    classes: [
      { id: 'company', name: '企业', rgb: '#7086A8', properties: [] },
      { id: 'lycj', name: '领域场景', rgb: '#83A3D7', properties: [] },
      { id: 'ryzz', name: '荣誉资质', rgb: '#8470A8', properties: [] },
      { id: 'city', name: '城市', rgb: '#C6986D', properties: [] },
      {
        id: 'Powersupply',
        name: '供电方式',
        rgb: '#7086A8',
        properties: ['额定电压']
      },
      {
        id: 'Powersupplytype',
        name: '供电方式类型',
        rgb: '#70A88F',
        properties: []
      },
      { id: 'interface', name: '接口', rgb: '#8470A8', properties: [] },
      {
        id: 'Indicatortype',
        name: '指标类型',
        rgb: '#C6986D',
        properties: []
      },
      {
        id: 'zhibiao',
        name: '指标',
        rgb: 'rgba(132, 112, 168, 1)',
        properties: ['测量范围左值', '测量范围右值', '测量精度']
      },
      { id: 'cplx', name: '产品类型', rgb: '#8470A8', properties: [] },
      {
        id: 'product',
        name: '产品',
        rgb: '#6EA3FD',
        properties: [
          '工作温度右值',
          '型号',
          '工作温度左值',
          '防凝露',
          '防水防尘'
        ]
      },
      {
        id: 'jklx',
        name: '接口类型',
        rgb: 'rgba(80, 92, 89, 1)',
        properties: []
      },
      { id: 'solution', name: '方案', rgb: '#425B8A', properties: [] }
    ],
    edges: [
      {
        id: 'release1',
        name: '发布产品',
        fromClass: 'company',
        toClass: 'product'
      },
      { id: 'local', name: '位于', fromClass: 'company', toClass: 'city' },
      { id: 'type', name: '所属类型', fromClass: 'product', toClass: 'cplx' },
      { id: 'shuyu', name: '属于', fromClass: 'product', toClass: 'lycj' },
      { id: 'shuyu1', name: '属于', fromClass: 'solution', toClass: 'lycj' },
      { id: 'belong', name: '属于', fromClass: 'company', toClass: 'lycj' },
      {
        id: 'have',
        name: '拥有荣誉资质',
        fromClass: 'company',
        toClass: 'ryzz'
      },
      {
        id: 'Belonginginterface',
        name: '所属接口',
        fromClass: 'interface',
        toClass: 'jklx'
      },
      {
        id: 'referenceproduct',
        name: '引用产品',
        fromClass: 'solution',
        toClass: 'product'
      },
      {
        id: 'release',
        name: '发布方案',
        fromClass: 'company',
        toClass: 'solution'
      },
      {
        id: 'type1',
        name: '所属类型',
        fromClass: 'Powersupply',
        toClass: 'Powersupplytype'
      },
      {
        id: 'type2',
        name: '所属类型',
        fromClass: 'zhibiao',
        toClass: 'Indicatortype'
      },
      {
        id: 'haveindicators',
        name: '拥有指标',
        fromClass: 'product',
        toClass: 'zhibiao'
      },
      {
        id: 'powersupply',
        name: '供电方式',
        fromClass: 'product',
        toClass: 'Powersupply'
      },
      {
        id: 'hasInterface',
        name: '拥有接口',
        fromClass: 'product',
        toClass: 'interface'
      }
    ]
  };
};

export const data3 = () => {
  return {
    classes: [
      {
        id: 'struct_900006791',
        name: '加速度传感器',
        classId: 'cplx',
        className: '产品类型',
        classRGB: '#8470A8'
      },
      {
        id: 'irQ5pk7fLdMGft4Q2',
        name: 'I2C',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: '200009732_DC_POWER_SUPPLY',
        name: '直流供电',
        classId: 'Powersupply',
        className: '供电方式',
        classRGB: '#7086A8'
      },
      {
        id: 'imscqZt1i7tyi4dot',
        name: 'PM2.5浓度',
        classId: 'zhibiao',
        className: '指标',
        classRGB: 'rgba(132, 112, 168, 1)'
      },
      {
        id: 'wifi',
        name: 'Wi-Fi',
        classId: 'jklx',
        className: '接口类型',
        classRGB: 'rgba(80, 92, 89, 1)'
      },
      {
        id: 'TAG20210414064718000001',
        name: '气象监测',
        classId: 'lycj',
        className: '领域场景',
        classRGB: '#83A3D7'
      },
      {
        id: 'transparency',
        name: '透明度',
        classId: 'Indicatortype',
        className: '指标类型',
        classRGB: '#C6986D'
      },
      {
        id: 'iAYYOWxXt5lAK0LYt',
        name: 'DO',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: 'TAG20210414064034000001',
        name: '能效管理',
        classId: 'lycj',
        className: '领域场景',
        classRGB: '#83A3D7'
      },
      {
        id: 'iHjsDHaTRyVmfrntZ',
        name: '燃气泄漏',
        classId: 'zhibiao',
        className: '指标',
        classRGB: 'rgba(132, 112, 168, 1)'
      },
      {
        id: 'struct_100018262',
        name: '开关控制器',
        classId: 'cplx',
        className: '产品类型',
        classRGB: '#8470A8'
      },
      {
        id: 'iYMbplhTfHQX22uTA',
        name: ' NB-IoT',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: 'analog_output_interface',
        name: 'AO',
        classId: 'jklx',
        className: '接口类型',
        classRGB: 'rgba(80, 92, 89, 1)'
      },
      {
        id: 'idUrsb6VIjOHgck5p',
        name: 'USB',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: 'product_700343321',
        name: '电磁继电器 110VAC 48VDC',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200009732',
        name: '重力传感器 数字量信号输出',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: '200137711_DC_POWER_SUPPLY',
        name: '直流供电',
        classId: 'Powersupply',
        className: '供电方式',
        classRGB: '#7086A8'
      },
      {
        id: '200120481_DC_POWER_SUPPLY',
        name: '直流供电',
        classId: 'Powersupply',
        className: '供电方式',
        classRGB: '#7086A8'
      },
      {
        id: 'i2c',
        name: 'I2C',
        classId: 'jklx',
        className: '接口类型',
        classRGB: 'rgba(80, 92, 89, 1)'
      },
      {
        id: 'i1aC6WpJIFlDLhMGH',
        name: 'Wi-Fi',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: 'TAG20210414063010000001',
        name: '智慧园区',
        classId: 'lycj',
        className: '领域场景',
        classRGB: '#83A3D7'
      },
      {
        id: 'iupcLBdzX9nzzEhm9',
        name: 'I2C',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: 'iLSfDwo9ZsvF9op8v',
        name: 'NB-IoT',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: 'iA5qXC6uRMjXoSpWY',
        name: '甲醛浓度',
        classId: 'zhibiao',
        className: '指标',
        classRGB: 'rgba(132, 112, 168, 1)'
      },
      {
        id: 'ethernet',
        name: '以太网',
        classId: 'jklx',
        className: '接口类型',
        classRGB: 'rgba(80, 92, 89, 1)'
      },
      {
        id: '300942361_AC_POWER_SUPPLY',
        name: '交流供电',
        classId: 'Powersupply',
        className: '供电方式',
        classRGB: '#7086A8'
      },
      {
        id: 'TAG20210414065015000001',
        name: '家电控制',
        classId: 'lycj',
        className: '领域场景',
        classRGB: '#83A3D7'
      },
      {
        id: 'product_200065528',
        name: '配电开关监测模块7086D',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'iNdQZh83ksWkDhxIG',
        name: ' RS485',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: 'iDoXGkcl4GXcXBcyw',
        name: '加速度',
        classId: 'zhibiao',
        className: '指标',
        classRGB: 'rgba(132, 112, 168, 1)'
      },
      {
        id: 'TAG20210414063454000001',
        name: '智慧消防',
        classId: 'lycj',
        className: '领域场景',
        classRGB: '#83A3D7'
      },
      {
        id: 'iPGmRUqP8qAafHgSZ',
        name: 'Wi-Fi',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: 'i0KwCMOylrJA8CbbF',
        name: 'B相有功功率',
        classId: 'zhibiao',
        className: '指标',
        classRGB: 'rgba(132, 112, 168, 1)'
      },
      {
        id: 'TAG20210414060812000001',
        name: '智慧工地',
        classId: 'lycj',
        className: '领域场景',
        classRGB: '#83A3D7'
      },
      {
        id: 'struct_900010001',
        name: '氮氧化物传感器',
        classId: 'cplx',
        className: '产品类型',
        classRGB: '#8470A8'
      },
      {
        id: 'igb0w0z6ylSL50vyu',
        name: '以太网',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: 'digital_output_interface',
        name: 'DO',
        classId: 'jklx',
        className: '接口类型',
        classRGB: 'rgba(80, 92, 89, 1)'
      },
      {
        id: 'iCSUVhllk9I2h3XGM',
        name: '蓝牙',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: 'irbk8MUt14dU5WV3q',
        name: 'USB',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: '700343321_AC_POWER_SUPPLY',
        name: '交流供电',
        classId: 'Powersupply',
        className: '供电方式',
        classRGB: '#7086A8'
      },
      {
        id: 'struct_900018212',
        name: '智能插座',
        classId: 'cplx',
        className: '产品类型',
        classRGB: '#8470A8'
      },
      {
        id: 'alarm_state',
        name: '报警状态',
        classId: 'Indicatortype',
        className: '指标类型',
        classRGB: '#C6986D'
      },
      {
        id: '200008501_AC_POWER_SUPPLY',
        name: '交流供电',
        classId: 'Powersupply',
        className: '供电方式',
        classRGB: '#7086A8'
      },
      {
        id: 'iAHzeBs4HXIc5Lwkp',
        name: '4-20mA',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: 'TAG20210414063133000001',
        name: '智能楼宇',
        classId: 'lycj',
        className: '领域场景',
        classRGB: '#83A3D7'
      },
      {
        id: 'DC_POWER_SUPPLY',
        name: '直流供电',
        classId: 'Powersupplytype',
        className: '供电方式类型',
        classRGB: '#70A88F'
      },
      {
        id: 'iGKYs2lA2JasWMuQb',
        name: 'I2C',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: 'iBy1QMHcaxeRa8JdE',
        name: 'RS232',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: '200925281_AC_POWER_SUPPLY',
        name: '交流供电',
        classId: 'Powersupply',
        className: '供电方式',
        classRGB: '#7086A8'
      },
      {
        id: 'TAG20210414063620000001',
        name: '智慧用电',
        classId: 'lycj',
        className: '领域场景',
        classRGB: '#83A3D7'
      },
      {
        id: 'iv3V1HS8WItx1T93L',
        name: 'DO',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: 'TAG20210414064830000001',
        name: '水库监测',
        classId: 'lycj',
        className: '领域场景',
        classRGB: '#83A3D7'
      },
      {
        id: 'iHrpVXSQwwejyBfvP',
        name: 'A相有功功率',
        classId: 'zhibiao',
        className: '指标',
        classRGB: 'rgba(132, 112, 168, 1)'
      },
      {
        id: 'itChLGnikXnPtyXaW',
        name: '4~20mA',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: 'number_of_person',
        name: '人数',
        classId: 'Indicatortype',
        className: '指标类型',
        classRGB: '#C6986D'
      },
      {
        id: 'TAG20210414064258000001',
        name: '环境保护',
        classId: 'lycj',
        className: '领域场景',
        classRGB: '#83A3D7'
      },
      {
        id: 'product_300942361',
        name: '电磁继电器 110VAC 12VDC',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'private_interface',
        name: '私有接口',
        classId: 'jklx',
        className: '接口类型',
        classRGB: 'rgba(80, 92, 89, 1)'
      },
      {
        id: 'temperature',
        name: '温度',
        classId: 'Indicatortype',
        className: '指标类型',
        classRGB: '#C6986D'
      },
      {
        id: 'struct_300006118',
        name: 'PM2.5传感器',
        classId: 'cplx',
        className: '产品类型',
        classRGB: '#8470A8'
      },
      {
        id: '500067271_AC_POWER_SUPPLY',
        name: '交流供电',
        classId: 'Powersupply',
        className: '供电方式',
        classRGB: '#7086A8'
      },
      {
        id: 'iAzX0ruoJ7PrueQyj',
        name: 'RS485',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: '300081118_DC_POWER_SUPPLY',
        name: '直流供电',
        classId: 'Powersupply',
        className: '供电方式',
        classRGB: '#7086A8'
      },
      {
        id: 'imBQOwGdxNvBpAOgY',
        name: ' AO',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: 'TAG20210629081140000005',
        name: '路灯监管',
        classId: 'lycj',
        className: '领域场景',
        classRGB: '#83A3D7'
      },
      {
        id: 'electron_current',
        name: '电流',
        classId: 'Indicatortype',
        className: '指标类型',
        classRGB: '#C6986D'
      },
      {
        id: 'TAG20210414062153000001',
        name: '智慧城市',
        classId: 'lycj',
        className: '领域场景',
        classRGB: '#83A3D7'
      },
      {
        id: 'TAG20210414064125000001',
        name: '环境监测',
        classId: 'lycj',
        className: '领域场景',
        classRGB: '#83A3D7'
      },
      {
        id: 'iQTfObYUnD3AbS738',
        name: '臭氧浓度',
        classId: 'zhibiao',
        className: '指标',
        classRGB: 'rgba(132, 112, 168, 1)'
      },
      {
        id: '200721280_DC_POWER_SUPPLY',
        name: '直流供电',
        classId: 'Powersupply',
        className: '供电方式',
        classRGB: '#7086A8'
      },
      {
        id: '100270144_DC_POWER_SUPPLY',
        name: '直流供电',
        classId: 'Powersupply',
        className: '供电方式',
        classRGB: '#7086A8'
      },
      {
        id: 'i5T08JF3udk6iFoI7',
        name: '气压',
        classId: 'zhibiao',
        className: '指标',
        classRGB: 'rgba(132, 112, 168, 1)'
      },
      {
        id: 'TAG20210629081838000004',
        name: '工业制造',
        classId: 'lycj',
        className: '领域场景',
        classRGB: '#83A3D7'
      },
      {
        id: 'product_200521264',
        name: '“赛通”电动卷帘机',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'bluetooth',
        name: '蓝牙',
        classId: 'jklx',
        className: '接口类型',
        classRGB: 'rgba(80, 92, 89, 1)'
      },
      {
        id: 'i0PpM7VUmleHAcn10',
        name: 'DO',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: 'ie93RpFsfonZEpNVA',
        name: '蓝牙',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: 'formaldehyde',
        name: '甲醛浓度',
        classId: 'Indicatortype',
        className: '指标类型',
        classRGB: '#C6986D'
      },
      {
        id: 'TAG20210414063554000001',
        name: '智慧办公',
        classId: 'lycj',
        className: '领域场景',
        classRGB: '#83A3D7'
      },
      {
        id: 'active_electric_power',
        name: '有功功率',
        classId: 'Indicatortype',
        className: '指标类型',
        classRGB: '#C6986D'
      },
      {
        id: 'ilvJCEdm7U1k0ybW4',
        name: '氮氧化[合]物(气体)浓度',
        classId: 'zhibiao',
        className: '指标',
        classRGB: 'rgba(132, 112, 168, 1)'
      },
      {
        id: 'iWg6261o5w6aVbij5',
        name: '433无线',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: 'atmospheric_pressure',
        name: '气压',
        classId: 'Indicatortype',
        className: '指标类型',
        classRGB: '#C6986D'
      },
      {
        id: 'iVpWIkh4SjAm0LWcO',
        name: 'DI',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: 'iAT9bwcdFqMY56RP1',
        name: '人数',
        classId: 'zhibiao',
        className: '指标',
        classRGB: 'rgba(132, 112, 168, 1)'
      },
      {
        id: 'idWjNPhQAFL4dIAvu',
        name: '以太网',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: 'solution_500252901',
        name: '智慧消防水监测方案',
        classId: 'solution',
        className: '方案',
        classRGB: '#425B8A'
      },
      {
        id: 'product_300140818',
        name: '86盒墙壁开关插座 2500W',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'AC_POWER_SUPPLY',
        name: '交流供电',
        classId: 'Powersupplytype',
        className: '供电方式类型',
        classRGB: '#70A88F'
      },
      {
        id: 'product_200120481',
        name: '南昌攀藤PM2.5传感器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: '100081120_DC_POWER_SUPPLY',
        name: '直流供电',
        classId: 'Powersupply',
        className: '供电方式',
        classRGB: '#7086A8'
      },
      {
        id: 'struct_500016221',
        name: '继电器',
        classId: 'cplx',
        className: '产品类型',
        classRGB: '#8470A8'
      },
      {
        id: 'product_100270144',
        name: 'EA-135加速度传感器 支',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'iIyu5IbN98EbjVNFu',
        name: 'UART',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: 'usb',
        name: 'USB',
        classId: 'jklx',
        className: '接口类型',
        classRGB: 'rgba(80, 92, 89, 1)'
      },
      {
        id: 'ipRV0saw6ecVg6RJL',
        name: 'RS485',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: 'iRtkH3oon16AResnQ',
        name: '相电流C',
        classId: 'zhibiao',
        className: '指标',
        classRGB: 'rgba(132, 112, 168, 1)'
      },
      {
        id: 'ih5hpWDvpYZRnnxYb',
        name: 'DO',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: 'ittYoWhtomsJedURG',
        name: ' Wi-Fi',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: 'recomend_standard_485',
        name: 'RS485',
        classId: 'jklx',
        className: '接口类型',
        classRGB: 'rgba(80, 92, 89, 1)'
      },
      {
        id: 'ozone',
        name: '臭氧浓度',
        classId: 'Indicatortype',
        className: '指标类型',
        classRGB: '#C6986D'
      },
      {
        id: 'TAG20210630081701000004',
        name: '农业灌溉',
        classId: 'lycj',
        className: '领域场景',
        classRGB: '#83A3D7'
      },
      {
        id: 'iPwVbn3F1Rx8EvTJE',
        name: '温度',
        classId: 'zhibiao',
        className: '指标',
        classRGB: 'rgba(132, 112, 168, 1)'
      },
      {
        id: 'product_200087990',
        name: '氮氧化物监测设备',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'struct_100036211',
        name: '执行设备',
        classId: 'cplx',
        className: '产品类型',
        classRGB: '#8470A8'
      },
      {
        id: 'i5TggB577ybdYk2ss',
        name: 'AO',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: '200065528_DC_POWER_SUPPLY',
        name: '直流供电',
        classId: 'Powersupply',
        className: '供电方式',
        classRGB: '#7086A8'
      },
      {
        id: 'iQ6UD8ANygqFJwMUY',
        name: 'RS485',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: 'icvi7NGkVHpBaWrsE',
        name: '透明度',
        classId: 'zhibiao',
        className: '指标',
        classRGB: 'rgba(132, 112, 168, 1)'
      },
      {
        id: 'digital_input_interface',
        name: 'DI',
        classId: 'jklx',
        className: '接口类型',
        classRGB: 'rgba(80, 92, 89, 1)'
      },
      {
        id: 'ioj2p2qwqGaQdkZLz',
        name: 'RS485',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: 'nb_iot',
        name: 'NB-IoT',
        classId: 'jklx',
        className: '接口类型',
        classRGB: 'rgba(80, 92, 89, 1)'
      },
      {
        id: 'TAG20210414063045000001',
        name: '智慧校园',
        classId: 'lycj',
        className: '领域场景',
        classRGB: '#83A3D7'
      },
      {
        id: 'TAG20210414065126000001',
        name: '智能家居',
        classId: 'lycj',
        className: '领域场景',
        classRGB: '#83A3D7'
      },
      {
        id: 'ijpVCjxGFTiKhYmFz',
        name: '质量',
        classId: 'zhibiao',
        className: '指标',
        classRGB: 'rgba(132, 112, 168, 1)'
      },
      {
        id: 'i4xwZoxKLLvnpV2Vl',
        name: 'DI',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: 'TAG20210414065359000001',
        name: '智慧农业',
        classId: 'lycj',
        className: '领域场景',
        classRGB: '#83A3D7'
      },
      {
        id: 'struct_100006842',
        name: '重力传感器',
        classId: 'cplx',
        className: '产品类型',
        classRGB: '#8470A8'
      },
      {
        id: '200009732_AC_POWER_SUPPLY',
        name: '交流供电',
        classId: 'Powersupply',
        className: '供电方式',
        classRGB: '#7086A8'
      }
    ],
    edges: [
      {
        fromClass: 'product_300140818',
        toClass: 'TAG20210414063554000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_300140818',
        toClass: 'struct_900018212',
        edgeTypeId: 'type',
        name: '所属类型',
        rank: 0
      },
      {
        fromClass: 'product_300140818',
        toClass: 'iCSUVhllk9I2h3XGM',
        edgeTypeId: 'hasInterface',
        name: '拥有接口',
        rank: 0
      },
      {
        fromClass: 'product_300140818',
        toClass: 'TAG20210414060812000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_300140818',
        toClass: 'TAG20210414063133000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_300140818',
        toClass: 'iPGmRUqP8qAafHgSZ',
        edgeTypeId: 'hasInterface',
        name: '拥有接口',
        rank: 0
      },
      {
        fromClass: 'product_300140818',
        toClass: 'TAG20210414063010000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_300140818',
        toClass: 'TAG20210414064034000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_300140818',
        toClass: 'TAG20210414065126000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_300140818',
        toClass: 'TAG20210414063045000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'irbk8MUt14dU5WV3q',
        toClass: 'usb',
        edgeTypeId: 'Belonginginterface',
        name: '所属接口',
        rank: 0
      },
      {
        fromClass: 'i0PpM7VUmleHAcn10',
        toClass: 'digital_output_interface',
        edgeTypeId: 'Belonginginterface',
        name: '所属接口',
        rank: 0
      },
      {
        fromClass: 'ie93RpFsfonZEpNVA',
        toClass: 'bluetooth',
        edgeTypeId: 'Belonginginterface',
        name: '所属接口',
        rank: 0
      },
      {
        fromClass: 'product_100270144',
        toClass: 'TAG20210414064830000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_100270144',
        toClass: 'i5TggB577ybdYk2ss',
        edgeTypeId: 'hasInterface',
        name: '拥有接口',
        rank: 0
      },
      {
        fromClass: 'product_100270144',
        toClass: 'TAG20210414060812000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_100270144',
        toClass: 'iDoXGkcl4GXcXBcyw',
        edgeTypeId: 'haveindicators',
        name: '拥有指标',
        rank: 0
      },
      {
        fromClass: 'product_100270144',
        toClass: '100270144_DC_POWER_SUPPLY',
        edgeTypeId: 'powersupply',
        name: '供电方式',
        rank: 0
      },
      {
        fromClass: 'product_100270144',
        toClass: 'struct_900006791',
        edgeTypeId: 'type',
        name: '所属类型',
        rank: 0
      },
      {
        fromClass: 'iGKYs2lA2JasWMuQb',
        toClass: 'i2c',
        edgeTypeId: 'Belonginginterface',
        name: '所属接口',
        rank: 0
      },
      {
        fromClass: 'i0KwCMOylrJA8CbbF',
        toClass: 'active_electric_power',
        edgeTypeId: 'type2',
        name: '所属类型',
        rank: 0
      },
      {
        fromClass: 'iPwVbn3F1Rx8EvTJE',
        toClass: 'temperature',
        edgeTypeId: 'type2',
        name: '所属类型',
        rank: 0
      },
      {
        fromClass: 'product_200521264',
        toClass: 'TAG20210630081701000004',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200521264',
        toClass: 'struct_100036211',
        edgeTypeId: 'type',
        name: '所属类型',
        rank: 0
      },
      {
        fromClass: 'product_200521264',
        toClass: 'ipRV0saw6ecVg6RJL',
        edgeTypeId: 'hasInterface',
        name: '拥有接口',
        rank: 0
      },
      {
        fromClass: 'product_200521264',
        toClass: 'TAG20210414065359000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200120481',
        toClass: 'TAG20210414064258000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200120481',
        toClass: 'struct_300006118',
        edgeTypeId: 'type',
        name: '所属类型',
        rank: 0
      },
      {
        fromClass: 'product_200120481',
        toClass: 'iIyu5IbN98EbjVNFu',
        edgeTypeId: 'hasInterface',
        name: '拥有接口',
        rank: 0
      },
      {
        fromClass: 'product_200120481',
        toClass: 'TAG20210414064125000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200120481',
        toClass: '200120481_DC_POWER_SUPPLY',
        edgeTypeId: 'powersupply',
        name: '供电方式',
        rank: 0
      },
      {
        fromClass: 'product_200120481',
        toClass: 'irQ5pk7fLdMGft4Q2',
        edgeTypeId: 'hasInterface',
        name: '拥有接口',
        rank: 0
      },
      {
        fromClass: 'product_200120481',
        toClass: 'imscqZt1i7tyi4dot',
        edgeTypeId: 'haveindicators',
        name: '拥有指标',
        rank: 0
      },
      {
        fromClass: 'product_200120481',
        toClass: 'TAG20210414064718000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200120481',
        toClass: 'TAG20210414065126000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200087990',
        toClass: 'ilvJCEdm7U1k0ybW4',
        edgeTypeId: 'haveindicators',
        name: '拥有指标',
        rank: 0
      },
      {
        fromClass: 'product_200087990',
        toClass: 'struct_900010001',
        edgeTypeId: 'type',
        name: '所属类型',
        rank: 0
      },
      {
        fromClass: 'product_200087990',
        toClass: 'TAG20210414064125000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200087990',
        toClass: 'i1aC6WpJIFlDLhMGH',
        edgeTypeId: 'hasInterface',
        name: '拥有接口',
        rank: 0
      },
      {
        fromClass: 'product_200087990',
        toClass: 'idUrsb6VIjOHgck5p',
        edgeTypeId: 'hasInterface',
        name: '拥有接口',
        rank: 0
      },
      {
        fromClass: 'product_200087990',
        toClass: 'ioj2p2qwqGaQdkZLz',
        edgeTypeId: 'hasInterface',
        name: '拥有接口',
        rank: 0
      },
      {
        fromClass: '500067271_AC_POWER_SUPPLY',
        toClass: 'AC_POWER_SUPPLY',
        edgeTypeId: 'type1',
        name: '所属类型',
        rank: 0
      },
      {
        fromClass: 'iA5qXC6uRMjXoSpWY',
        toClass: 'formaldehyde',
        edgeTypeId: 'type2',
        name: '所属类型',
        rank: 0
      },
      {
        fromClass: 'iNdQZh83ksWkDhxIG',
        toClass: 'recomend_standard_485',
        edgeTypeId: 'Belonginginterface',
        name: '所属接口',
        rank: 0
      },
      {
        fromClass: 'iQTfObYUnD3AbS738',
        toClass: 'ozone',
        edgeTypeId: 'type2',
        name: '所属类型',
        rank: 0
      },
      {
        fromClass: '200721280_DC_POWER_SUPPLY',
        toClass: 'DC_POWER_SUPPLY',
        edgeTypeId: 'type1',
        name: '所属类型',
        rank: 0
      },
      {
        fromClass: 'iWg6261o5w6aVbij5',
        toClass: 'private_interface',
        edgeTypeId: 'Belonginginterface',
        name: '所属接口',
        rank: 0
      },
      {
        fromClass: 'iAT9bwcdFqMY56RP1',
        toClass: 'number_of_person',
        edgeTypeId: 'type2',
        name: '所属类型',
        rank: 0
      },
      {
        fromClass: 'product_200009732',
        toClass: 'iBy1QMHcaxeRa8JdE',
        edgeTypeId: 'hasInterface',
        name: '拥有接口',
        rank: 0
      },
      {
        fromClass: 'product_200009732',
        toClass: 'TAG20210414060812000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200009732',
        toClass: 'TAG20210629081838000004',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200009732',
        toClass: 'iAzX0ruoJ7PrueQyj',
        edgeTypeId: 'hasInterface',
        name: '拥有接口',
        rank: 0
      },
      {
        fromClass: 'product_200009732',
        toClass: '200009732_DC_POWER_SUPPLY',
        edgeTypeId: 'powersupply',
        name: '供电方式',
        rank: 0
      },
      {
        fromClass: 'product_200009732',
        toClass: 'struct_100006842',
        edgeTypeId: 'type',
        name: '所属类型',
        rank: 0
      },
      {
        fromClass: 'product_200009732',
        toClass: 'ijpVCjxGFTiKhYmFz',
        edgeTypeId: 'haveindicators',
        name: '拥有指标',
        rank: 0
      },
      {
        fromClass: 'product_200009732',
        toClass: '200009732_AC_POWER_SUPPLY',
        edgeTypeId: 'powersupply',
        name: '供电方式',
        rank: 0
      },
      {
        fromClass: '200137711_DC_POWER_SUPPLY',
        toClass: 'DC_POWER_SUPPLY',
        edgeTypeId: 'type1',
        name: '所属类型',
        rank: 0
      },
      {
        fromClass: 'iLSfDwo9ZsvF9op8v',
        toClass: 'nb_iot',
        edgeTypeId: 'Belonginginterface',
        name: '所属接口',
        rank: 0
      },
      {
        fromClass: 'ittYoWhtomsJedURG',
        toClass: 'wifi',
        edgeTypeId: 'Belonginginterface',
        name: '所属接口',
        rank: 0
      },
      {
        fromClass: 'icvi7NGkVHpBaWrsE',
        toClass: 'transparency',
        edgeTypeId: 'type2',
        name: '所属类型',
        rank: 0
      },
      {
        fromClass: 'product_300942361',
        toClass: 'TAG20210414063620000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_300942361',
        toClass: 'struct_500016221',
        edgeTypeId: 'type',
        name: '所属类型',
        rank: 0
      },
      {
        fromClass: 'product_300942361',
        toClass: 'ih5hpWDvpYZRnnxYb',
        edgeTypeId: 'hasInterface',
        name: '拥有接口',
        rank: 0
      },
      {
        fromClass: 'product_300942361',
        toClass: '300942361_AC_POWER_SUPPLY',
        edgeTypeId: 'powersupply',
        name: '供电方式',
        rank: 0
      },
      {
        fromClass: 'product_300942361',
        toClass: 'TAG20210414065015000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'iHrpVXSQwwejyBfvP',
        toClass: 'active_electric_power',
        edgeTypeId: 'type2',
        name: '所属类型',
        rank: 0
      },
      {
        fromClass: 'irQ5pk7fLdMGft4Q2',
        toClass: 'i2c',
        edgeTypeId: 'Belonginginterface',
        name: '所属接口',
        rank: 0
      },
      {
        fromClass: 'iVpWIkh4SjAm0LWcO',
        toClass: 'digital_input_interface',
        edgeTypeId: 'Belonginginterface',
        name: '所属接口',
        rank: 0
      },
      {
        fromClass: 'idWjNPhQAFL4dIAvu',
        toClass: 'ethernet',
        edgeTypeId: 'Belonginginterface',
        name: '所属接口',
        rank: 0
      },
      {
        fromClass: 'iYMbplhTfHQX22uTA',
        toClass: 'nb_iot',
        edgeTypeId: 'Belonginginterface',
        name: '所属接口',
        rank: 0
      },
      {
        fromClass: 'iRtkH3oon16AResnQ',
        toClass: 'electron_current',
        edgeTypeId: 'type2',
        name: '所属类型',
        rank: 0
      },
      {
        fromClass: 'i5T08JF3udk6iFoI7',
        toClass: 'atmospheric_pressure',
        edgeTypeId: 'type2',
        name: '所属类型',
        rank: 0
      },
      {
        fromClass: 'product_200065528',
        toClass: 'iQ6UD8ANygqFJwMUY',
        edgeTypeId: 'hasInterface',
        name: '拥有接口',
        rank: 0
      },
      {
        fromClass: 'product_200065528',
        toClass: '200065528_DC_POWER_SUPPLY',
        edgeTypeId: 'powersupply',
        name: '供电方式',
        rank: 0
      },
      {
        fromClass: 'product_200065528',
        toClass: 'TAG20210414060812000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200065528',
        toClass: 'TAG20210414063133000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200065528',
        toClass: 'TAG20210629081140000005',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200065528',
        toClass: 'TAG20210414062153000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200065528',
        toClass: 'TAG20210414063010000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200065528',
        toClass: 'struct_100018262',
        edgeTypeId: 'type',
        name: '所属类型',
        rank: 0
      },
      {
        fromClass: 'product_200065528',
        toClass: 'i4xwZoxKLLvnpV2Vl',
        edgeTypeId: 'hasInterface',
        name: '拥有接口',
        rank: 0
      },
      {
        fromClass: '300081118_DC_POWER_SUPPLY',
        toClass: 'DC_POWER_SUPPLY',
        edgeTypeId: 'type1',
        name: '所属类型',
        rank: 0
      },
      {
        fromClass: 'iupcLBdzX9nzzEhm9',
        toClass: 'i2c',
        edgeTypeId: 'Belonginginterface',
        name: '所属接口',
        rank: 0
      },
      {
        fromClass: 'igb0w0z6ylSL50vyu',
        toClass: 'ethernet',
        edgeTypeId: 'Belonginginterface',
        name: '所属接口',
        rank: 0
      },
      {
        fromClass: '100081120_DC_POWER_SUPPLY',
        toClass: 'DC_POWER_SUPPLY',
        edgeTypeId: 'type1',
        name: '所属类型',
        rank: 0
      },
      {
        fromClass: 'iAHzeBs4HXIc5Lwkp',
        toClass: 'recomend_standard_485',
        edgeTypeId: 'Belonginginterface',
        name: '所属接口',
        rank: 0
      },
      {
        fromClass: 'iHjsDHaTRyVmfrntZ',
        toClass: 'alarm_state',
        edgeTypeId: 'type2',
        name: '所属类型',
        rank: 0
      },
      {
        fromClass: 'imBQOwGdxNvBpAOgY',
        toClass: 'analog_output_interface',
        edgeTypeId: 'Belonginginterface',
        name: '所属接口',
        rank: 0
      },
      {
        fromClass: 'product_700343321',
        toClass: 'TAG20210414063620000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_700343321',
        toClass: 'iv3V1HS8WItx1T93L',
        edgeTypeId: 'hasInterface',
        name: '拥有接口',
        rank: 0
      },
      {
        fromClass: 'product_700343321',
        toClass: 'struct_500016221',
        edgeTypeId: 'type',
        name: '所属类型',
        rank: 0
      },
      {
        fromClass: 'product_700343321',
        toClass: '700343321_AC_POWER_SUPPLY',
        edgeTypeId: 'powersupply',
        name: '供电方式',
        rank: 0
      },
      {
        fromClass: 'product_700343321',
        toClass: 'TAG20210414065015000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: '200008501_AC_POWER_SUPPLY',
        toClass: 'AC_POWER_SUPPLY',
        edgeTypeId: 'type1',
        name: '所属类型',
        rank: 0
      },
      {
        fromClass: 'itChLGnikXnPtyXaW',
        toClass: 'analog_output_interface',
        edgeTypeId: 'Belonginginterface',
        name: '所属接口',
        rank: 0
      },
      {
        fromClass: '200925281_AC_POWER_SUPPLY',
        toClass: 'AC_POWER_SUPPLY',
        edgeTypeId: 'type1',
        name: '所属类型',
        rank: 0
      },
      {
        fromClass: 'iAYYOWxXt5lAK0LYt',
        toClass: 'digital_output_interface',
        edgeTypeId: 'Belonginginterface',
        name: '所属接口',
        rank: 0
      },
      {
        fromClass: 'solution_500252901',
        toClass: 'TAG20210414063454000001',
        edgeTypeId: 'shuyu1',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'solution_500252901',
        toClass: 'TAG20210414062153000001',
        edgeTypeId: 'shuyu1',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'solution_500252901',
        toClass: 'TAG20210414063010000001',
        edgeTypeId: 'shuyu1',
        name: '属于',
        rank: 0
      }
    ]
  };
};

export const data4 = () => {
  return {
    classes: [
      {
        id: 'iVRQ6iGwZFGQQvVtX',
        name: '低钠',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'ijDH0NWRPlouCtBXL',
        name: '继发性高血压',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'i5KAvPvO9wWc5JIXg',
        name: '小儿脑性瘫痪',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iVABEQgxUtkR0wwTD',
        name: '酒精性慢性胰腺炎',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'i3bY8Cbga6v4Do2RU',
        name: '幽门螺杆菌的胃内感染',
        classId: 'iZLd5bA5HdvWID3Fl',
        className: '社会学',
        classRGB: 'rgba(158,28,219,1)'
      },
      {
        id: 'i5cznnYD41B0mTF0D',
        name: '慢性肾病',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iR3rXaW842ygxasez',
        name: '心肌灌注减少',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iyVEP444LKRYDMVPA',
        name: '肝癌',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'imqGgedvkLFXG8zb9',
        name: '心绞痛',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'i2eFeitlYjkk2sElE',
        name: '自杀率很高',
        classId: 'icOTVY4c6YLwaW85T',
        className: '预后',
        classRGB: 'rgba(103,68,116,1)'
      },
      {
        id: 'iuvAe6iBzrAj9mTgb',
        name: '妊娠肝内胆汁淤积症',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'i5gWl5T3eEhVIfqdR',
        name: '血管炎',
        classId: 'iZLd5bA5HdvWID3Fl',
        className: '社会学',
        classRGB: 'rgba(158,28,219,1)'
      },
      {
        id: 'iHkwHEfg08ty9zlh7',
        name: 'PPHN',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iqgMp71v7PJ5mxwa8',
        name: '骨肿瘤',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iVibN7AncgYGAzf54',
        name: '细菌性肺炎',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'ipWkEua4xwpW5ZP72',
        name: '10/10万',
        classId: 'ihBa4NMerEmwPUd4R',
        className: '流行病学',
        classRGB: 'rgba(61,183,42,1)'
      },
      {
        id: 'iNNubO8csleHOYbDc',
        name: 'B族链球菌感染',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iKq67vl8s8DBCqlMp',
        name: '输血',
        classId: 'ihBa4NMerEmwPUd4R',
        className: '流行病学',
        classRGB: 'rgba(61,183,42,1)'
      },
      {
        id: 'iKsRDpYkAU9E264uP',
        name: '儿童高血压',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'i6MIpWKvVQ0rtcFp0',
        name: '黑人种族',
        classId: 'iZLd5bA5HdvWID3Fl',
        className: '社会学',
        classRGB: 'rgba(158,28,219,1)'
      },
      {
        id: 'iUGcywItsLPVjljwB',
        name: '纤维肉瘤',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iYB6Wg4tNb6zm4KWS',
        name: '耳鼻喉科',
        classId: 'ixTH16t2y47m1ZLgM',
        className: '其他',
        classRGB: 'rgba(61,125,242,1)'
      },
      {
        id: 'ixcfDmFnZQRDkt6PU',
        name: '重型地中海贫血',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iNVF2Jx60HH7NTT5l',
        name: 'ITP',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'i3JMLvUgejrEeSftF',
        name: '勒-雪综合征',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iPkWEGpjtdeQ45SLa',
        name: '冠状动脉痉挛',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'isI5mZlR3W5ot3nhv',
        name: '重症感染',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iEK4yWhbssYPeE0pF',
        name: '尘肺',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'irbsghuPIBKY1Gv08',
        name: '幼年型皮肌炎',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iPTvFkKLwyNxw02kW',
        name: '经皮针吸活组织检查',
        classId: 'irTRCpA2xemKsKn6r',
        className: '检查',
        classRGB: 'rgba(212,161,113,1)'
      },
      {
        id: 'iVjbJTuh7Mg6IlrrD',
        name: '新生儿高血糖',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'ij0wpZQcXgMcTbbzH',
        name: '肛门测压检査',
        classId: 'irTRCpA2xemKsKn6r',
        className: '检查',
        classRGB: 'rgba(212,161,113,1)'
      },
      {
        id: 'ix2EyqiMlE9EJ9qha',
        name: '内分泌失调',
        classId: 'iZLd5bA5HdvWID3Fl',
        className: '社会学',
        classRGB: 'rgba(158,28,219,1)'
      },
      {
        id: 'iyDJZTxg8lFlMQNbc',
        name: '污染的日用品、手、玩具',
        classId: 'ihBa4NMerEmwPUd4R',
        className: '流行病学',
        classRGB: 'rgba(61,183,42,1)'
      },
      {
        id: 'ifvm3yZcnwX7oMhgu',
        name: '骶尾部',
        classId: 'ixwFrWfHWd2hR2BT1',
        className: '部位',
        classRGB: 'rgba(55,33,163,1)'
      },
      {
        id: 'ikXCTUiL1zVSufttZ',
        name: '睾丸癌',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iShSr0oQenc6tSiDz',
        name: '卵巢癌',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iMzS0cuFQ83B5XALB',
        name: '高钠血症',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'ih0AbiQRPvBbsyVlb',
        name: '耳痛',
        classId: 'iXHk576IpEJYFo96N',
        className: '症状',
        classRGB: 'rgba(204,132,166,1)'
      },
      {
        id: 'iMVVxLwqZH9ASbO6f',
        name: '肺孢子虫病',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iuOqPbn0PQdERH6ln',
        name: '急性髓性白血病',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'i31bAbZ1ybvmJGsYA',
        name: '水肿',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'i46O0vAZNllIJREwX',
        name: '智力缺陷',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'ih782x0sx3aalYIer',
        name: '急性冠状动脉综合征',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'idjoYsgFfutKryESE',
        name: '脑白质损伤',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iobyLMOtZ5C4tLfDy',
        name: 'AAA 管壁应力峰值',
        classId: 'iZLd5bA5HdvWID3Fl',
        className: '社会学',
        classRGB: 'rgba(158,28,219,1)'
      },
      {
        id: 'iPkJOnJCBJ8tQQgH8',
        name: '重度瘙痒',
        classId: 'iXHk576IpEJYFo96N',
        className: '症状',
        classRGB: 'rgba(204,132,166,1)'
      },
      {
        id: 'idnln8bIqLBdM2rt9',
        name: '慢性胃炎',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iLLKy5wQOMdBSND2X',
        name: '新生儿黄疸',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'i7NZWm7s3Vodwq77C',
        name: '生长激素缺乏症',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iVMIXSfw2KxiVaSk7',
        name: '淹溺',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'inPSVnDwZb7hcxBVS',
        name: '死胎',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iYasL1pV4TTlVgRFm',
        name: '低血糖',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iJtZvKmJdkiocVmCB',
        name: '真菌性脑膜炎',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iZdHap8UKLRLoGX61',
        name: '意识障碍',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'i6fTSUsqErNWbao4X',
        name: 'PKU',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iRhlZMRnqj1XO8z3a',
        name: '原发性儿童MDS',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'ifqyq9KmjegK8juDU',
        name: '青霉胺',
        classId: 'iZLd5bA5HdvWID3Fl',
        className: '社会学',
        classRGB: 'rgba(158,28,219,1)'
      },
      {
        id: 'is3AbyUYpVHo7FbG2',
        name: '婴儿间质性浆细胞肺炎',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iDcptoTus4OsvXDvS',
        name: '谵妄',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'ipJnIyZId4zIenLpx',
        name: '放射性核素显像',
        classId: 'irTRCpA2xemKsKn6r',
        className: '检查',
        classRGB: 'rgba(212,161,113,1)'
      },
      {
        id: 'iG9OJYiaIit0M7M2K',
        name: '3 ～ 6个月的体弱婴儿',
        classId: 'ihBa4NMerEmwPUd4R',
        className: '流行病学',
        classRGB: 'rgba(61,183,42,1)'
      },
      {
        id: 'iTe1Ci95Zt3Ihn1d5',
        name: '慢性淋巴细胞白血病',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iFWW8U8M8tClWAdah',
        name: '慢性胰腺炎',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'izEzyI2hRbNOwcIoY',
        name: 'NFⅡ',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iK4oD2r4z5FlHDXVe',
        name: '小舞蹈症',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'igDU2bJIULY50edrO',
        name: '反射充进',
        classId: 'iXHk576IpEJYFo96N',
        className: '症状',
        classRGB: 'rgba(204,132,166,1)'
      },
      {
        id: 'iXsX5h7zIMhNOeG4u',
        name: '白喉',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iL6NvP694583Gl219',
        name: '认知障碍',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'i7LI7Ejz2fqTUaL8f',
        name: '人粒细胞无形体病',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'izUEDM03FhjUQBmde',
        name: '世界末日来临感',
        classId: 'iXHk576IpEJYFo96N',
        className: '症状',
        classRGB: 'rgba(204,132,166,1)'
      },
      {
        id: 'ijgU5kXzBpPFL8kGB',
        name: 'Bartter综合征',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iLco8RNQvkU89Uj78',
        name: '50%有颈蹼',
        classId: 'iXHk576IpEJYFo96N',
        className: '症状',
        classRGB: 'rgba(204,132,166,1)'
      },
      {
        id: 'i3IxbAcNjdP1WKoY1',
        name: '低钙血症',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'imW4BEo5B6T8mAFTR',
        name: '麻痹',
        classId: 'iXHk576IpEJYFo96N',
        className: '症状',
        classRGB: 'rgba(204,132,166,1)'
      },
      {
        id: 'ixy7Q5tbGo71xJlw2',
        name: '消化性溃疡病',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'ixIjBLREDV53aanv2',
        name: 'AMSAN',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iOdl9N9qIeAFXSTd9',
        name: '无呕血',
        classId: 'iXHk576IpEJYFo96N',
        className: '症状',
        classRGB: 'rgba(204,132,166,1)'
      },
      {
        id: 'imdCK11AVzXto5YVS',
        name: '颞下颌关节疾病',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'ikpcsp9EO7eTBfC2a',
        name: '7号染色体单体',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iyXKYpbTEE7KwV1im',
        name: '传染性单核细胞增多症',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iFrT8rUUsrt0Mb3Hj',
        name: '口咽癌',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'inhP74pX6KkfgaboS',
        name: 'TBMN',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iagFcdWUZIrJgGoJ7',
        name: '感染性心内膜炎',
        classId: 'iZLd5bA5HdvWID3Fl',
        className: '社会学',
        classRGB: 'rgba(158,28,219,1)'
      },
      {
        id: 'iFzDsOGSn8nSGO3PV',
        name: '体育锻炼',
        classId: 'iUp23OqppJM6CgD9L',
        className: '其他治疗',
        classRGB: 'rgba(202,207,213,1)'
      },
      {
        id: 'itcPoSbTQugcmjy7f',
        name: 'HSPN',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iSvkjJOEm0JfYYDeu',
        name: '中耳炎',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iBT1fiIVN41XUnMkB',
        name: '急性或慢性血吸虫病',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iHgSg3FbrFJWNNu4V',
        name: '药物性肾脏损害',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iavC8KZ50oRKtBCxW',
        name: '婴儿猝死综合征',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'i1qlhWQ1ihoCy8Ulu',
        name: '脓毒症',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'ixy1WCDGK5Y2yPHeR',
        name: 'ESR加快',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iuFy0MHs9XQSLSm9N',
        name: '畸形',
        classId: 'iXHk576IpEJYFo96N',
        className: '症状',
        classRGB: 'rgba(204,132,166,1)'
      },
      {
        id: 'iwQfTX7hOPAdGbEJc',
        name: '疟疾感染',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'i1p2dqQIl5Ur5lqGl',
        name: '乳腺原位癌',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iGBQdMNscaoTKlh9x',
        name: '乳突炎',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'ii1Jh7sxSJ0uJWDjo',
        name: 'AAA 超声筛查',
        classId: 'irTRCpA2xemKsKn6r',
        className: '检查',
        classRGB: 'rgba(212,161,113,1)'
      },
      {
        id: 'iYlR0G7kxvdpVKCxU',
        name: '脑脓肿',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'il3rxFRkZIv5e6hoz',
        name: '切牙孔前的结构',
        classId: 'ixwFrWfHWd2hR2BT1',
        className: '部位',
        classRGB: 'rgba(55,33,163,1)'
      },
      {
        id: 'iPlkZkNGBE5Q5aayD',
        name: '晚期慢性胰腺炎',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'il4dfJJWOHETPtxIl',
        name: '不明原因发热',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iZ9OLJqusPpIplLXh',
        name: '颗粒层增厚',
        classId: 'iXHk576IpEJYFo96N',
        className: '症状',
        classRGB: 'rgba(204,132,166,1)'
      },
      {
        id: 'i1XnLZhtahGNLlhcw',
        name: '显微喉镜',
        classId: 'irTRCpA2xemKsKn6r',
        className: '检查',
        classRGB: 'rgba(212,161,113,1)'
      },
      {
        id: 'iMlFXFHFu17f8vNF9',
        name: '激惹',
        classId: 'iXHk576IpEJYFo96N',
        className: '症状',
        classRGB: 'rgba(204,132,166,1)'
      },
      {
        id: 'iYhqIeBehGGIwFfAo',
        name: '肾小管-间质疾病',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'i9b3NIuo3NEZo7VrX',
        name: '继发性肾病综合征病',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iRLHmyX4eDijkDl7G',
        name: '室上速',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iWQ602qT9yYBXx1Oe',
        name: '干扰素-a2b',
        classId: 'iuXCxYL3OUwjvaOxB',
        className: '药物',
        classRGB: 'rgba(184,49,118,1)'
      },
      {
        id: 'iWsMPLVfVhEUE9yhX',
        name: '输尿管常常也无扩张',
        classId: 'iXHk576IpEJYFo96N',
        className: '症状',
        classRGB: 'rgba(204,132,166,1)'
      },
      {
        id: 'iHXx6XedjFliAgvyu',
        name: '痛风',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'i6KuiNffi3DiqiJB9',
        name: '芬兰型CNS',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'ibRAim0ZACMw1HBiw',
        name: '严重失眠',
        classId: 'iXHk576IpEJYFo96N',
        className: '症状',
        classRGB: 'rgba(204,132,166,1)'
      },
      {
        id: 'i7nqkGlhHkIvG14Fm',
        name: '声门上型喉癌',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iUYyrsWQmuQs3FgAv',
        name: '血管内溶血',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iqGgcMXFws8iJaZ6H',
        name: '先天性巨结肠',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iV95Hr4yIXumLy56c',
        name: '系统性红斑狼疮',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iE35bIe237CuJKZbT',
        name: '舞蹈样异常运动',
        classId: 'iXHk576IpEJYFo96N',
        className: '症状',
        classRGB: 'rgba(204,132,166,1)'
      },
      {
        id: 'iUohsASQhOAli4hbl',
        name: '反复发作的、可逆的喘息',
        classId: 'iXHk576IpEJYFo96N',
        className: '症状',
        classRGB: 'rgba(204,132,166,1)'
      },
      {
        id: 'icNp9uckPZb8ZlpZC',
        name: '腰椎前突',
        classId: 'iXHk576IpEJYFo96N',
        className: '症状',
        classRGB: 'rgba(204,132,166,1)'
      },
      {
        id: 'iNa5xv7ERiSW348j8',
        name: '女性多于男性',
        classId: 'ihBa4NMerEmwPUd4R',
        className: '流行病学',
        classRGB: 'rgba(61,183,42,1)'
      },
      {
        id: 'iyyjXRCVeka30wHqB',
        name: '气管软化症',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'ixJ1HIgWlH3KcGQLt',
        name: 'TIN',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'i4C7YTz59rKxeOLFW',
        name: '尸体剖检',
        classId: 'irTRCpA2xemKsKn6r',
        className: '检查',
        classRGB: 'rgba(212,161,113,1)'
      },
      {
        id: 'iKUGwf4sY82rM8xdO',
        name: '急性肾小管坏死',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'izoTIvlaujP6eace0',
        name: '腹主动脉瘤@破裂',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iAQ9sT2poa7Vj1zV4',
        name: '苯丙酮尿症',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'i2WeMi2KA0hXSIhmi',
        name: '支气管哮喘',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iJ3zb0v8aL9ZuGaXA',
        name: '过敏原特异性 IgE 免疫测定',
        classId: 'irTRCpA2xemKsKn6r',
        className: '检查',
        classRGB: 'rgba(212,161,113,1)'
      },
      {
        id: 'iTBdNg9kHV3gpwxCE',
        name: 'HELLP 综合征',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'irABP9MQKBRZY8WPo',
        name: '色素加深',
        classId: 'iXHk576IpEJYFo96N',
        className: '症状',
        classRGB: 'rgba(204,132,166,1)'
      },
      {
        id: 'i0Sk0Vr9Koq3I1OVl',
        name: '自身免疫性肝炎',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'izizZ65L5IsiHulqf',
        name: '适当的负重训练',
        classId: 'iUp23OqppJM6CgD9L',
        className: '其他治疗',
        classRGB: 'rgba(202,207,213,1)'
      },
      {
        id: 'ijtA7HlUmhciB2JVV',
        name: '矽肺病',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'ipCgHCjzbeCc8ivgu',
        name: '直接逆转录病毒脑病',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iyn7KznrJc5YF5Bvq',
        name: '某些避孕药',
        classId: 'iZLd5bA5HdvWID3Fl',
        className: '社会学',
        classRGB: 'rgba(158,28,219,1)'
      },
      {
        id: 'iF1JqrQCoZZ70Yb1z',
        name: '快速检测试验',
        classId: 'irTRCpA2xemKsKn6r',
        className: '检查',
        classRGB: 'rgba(212,161,113,1)'
      },
      {
        id: 'ioO4Wf5CeXsjkhtET',
        name: '下肢肿胀',
        classId: 'iXHk576IpEJYFo96N',
        className: '症状',
        classRGB: 'rgba(204,132,166,1)'
      },
      {
        id: 'i2VF7JB62dWEzFYd5',
        name: '非小细胞肺癌',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iBUChkbMt2J8c0XuJ',
        name: '溃疡杆菌',
        classId: 'iZLd5bA5HdvWID3Fl',
        className: '社会学',
        classRGB: 'rgba(158,28,219,1)'
      },
      {
        id: 'iPR32c3WrTkqBfBTR',
        name: '痰涂片检测',
        classId: 'irTRCpA2xemKsKn6r',
        className: '检查',
        classRGB: 'rgba(212,161,113,1)'
      },
      {
        id: 'iszQFi7a1WPzGU3MU',
        name: '帕金森病',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'ikuoHAGES0newP0fl',
        name: '骨髓呈增生性特征',
        classId: 'iXHk576IpEJYFo96N',
        className: '症状',
        classRGB: 'rgba(204,132,166,1)'
      },
      {
        id: 'iJP5kWqtWnZJ326I4',
        name: '给予抗毒素',
        classId: 'ixTH16t2y47m1ZLgM',
        className: '其他',
        classRGB: 'rgba(61,125,242,1)'
      },
      {
        id: 'i86PRGIx6O4JWypZP',
        name: '粪便脂肪含量高于7 g/日',
        classId: 'iXHk576IpEJYFo96N',
        className: '症状',
        classRGB: 'rgba(204,132,166,1)'
      },
      {
        id: 'ihXORhr1YZlDNRNi3',
        name: '基底细胞癌',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iBGHFNwXqXAR8D88b',
        name: '一氧化氮',
        classId: 'iUp23OqppJM6CgD9L',
        className: '其他治疗',
        classRGB: 'rgba(202,207,213,1)'
      },
      {
        id: 'iMdSofiaA6SFGFmMH',
        name: 'Zellweger综合征',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'i1i3MYqugBmv2HBa5',
        name: '磁共振胰胆管造影术',
        classId: 'i3w0Whz9tIyh7qtIt',
        className: '手术治疗',
        classRGB: 'rgba(80,224,158,1)'
      },
      {
        id: 'iVCwpOA7ZBYoxJREW',
        name: '粪便检测',
        classId: 'irTRCpA2xemKsKn6r',
        className: '检查',
        classRGB: 'rgba(212,161,113,1)'
      },
      {
        id: 'i1Ibo5DPlkx6TmJgr',
        name: '无脑畸形',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iSsDyDVSkQA1WDo13',
        name: '中耳渗液',
        classId: 'iXHk576IpEJYFo96N',
        className: '症状',
        classRGB: 'rgba(204,132,166,1)'
      },
      {
        id: 'iGWWAVQookWZJdzef',
        name: '肺部广泛浸润',
        classId: 'iXHk576IpEJYFo96N',
        className: '症状',
        classRGB: 'rgba(204,132,166,1)'
      },
      {
        id: 'i3u6BYORfjtrKobcj',
        name: '氧化应激',
        classId: 'iZLd5bA5HdvWID3Fl',
        className: '社会学',
        classRGB: 'rgba(158,28,219,1)'
      },
      {
        id: 'iPCq7EitSb47GQAXi',
        name: '远端 (dCCA)',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iUljQi6J0NYPyDDDc',
        name: '冠状动脉心脏病',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iAwtP6TGTRdwPOhuE',
        name: '罹患哮喘',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'imJBpEXV3rFb08Sdj',
        name: '1/3 000～1/4 000',
        classId: 'ihBa4NMerEmwPUd4R',
        className: '流行病学',
        classRGB: 'rgba(61,183,42,1)'
      },
      {
        id: 'iODXNifWrAJhAcZP9',
        name: '侵袭性非霍奇金淋巴瘤',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'igyQvFRtuoBqGtH4X',
        name: '黑人',
        classId: 'iZLd5bA5HdvWID3Fl',
        className: '社会学',
        classRGB: 'rgba(158,28,219,1)'
      },
      {
        id: 'ipZePs2jU4DT31A35',
        name: '早产',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iF581Y2xsrGdfV6oJ',
        name: '轴索受损',
        classId: 'iXHk576IpEJYFo96N',
        className: '症状',
        classRGB: 'rgba(204,132,166,1)'
      },
      {
        id: 'ikKkMXrt1hh9sShHt',
        name: '胸锁乳突肌的下半部',
        classId: 'ixwFrWfHWd2hR2BT1',
        className: '部位',
        classRGB: 'rgba(55,33,163,1)'
      },
      {
        id: 'iXLM5LtY2Bm1bTw5o',
        name: '中毒性',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iVMwvNCTgbutvRgRw',
        name: '急性过敏性间质性肾炎',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'i9rD0JgNu9dKlWb9k',
        name: 'CNS',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iBL7DW3oPQHmui7EQ',
        name: '急性逆转录病毒综合征',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'i0ZEGXlkEvHNBRf7Q',
        name: '情绪不稳',
        classId: 'iXHk576IpEJYFo96N',
        className: '症状',
        classRGB: 'rgba(204,132,166,1)'
      },
      {
        id: 'i74UxO1kxYkYnj8e0',
        name: '感染的治疗',
        classId: 'iUp23OqppJM6CgD9L',
        className: '其他治疗',
        classRGB: 'rgba(202,207,213,1)'
      },
      {
        id: 'iMHg7iUB00o4gyYNY',
        name: '慢性喉炎',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iZi6AT6uyvwAILmC9',
        name: '克-雅病',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'ifixEk7ioYLfTek0j',
        name: '手足口病',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'ij4gve5iYgujoMJHd',
        name: '高血压急症',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'i1OczJKZ12fhnyE7M',
        name: '类风湿关节炎',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'ipHFddaKcRXmHOHrp',
        name: '皮肤、毛发色素浅淡',
        classId: 'iXHk576IpEJYFo96N',
        className: '症状',
        classRGB: 'rgba(204,132,166,1)'
      },
      {
        id: 'iYRGyoUA6axTbbPR2',
        name: '狂犬病',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'i6Ir9BP9FsFJs53WE',
        name: '中枢神经系统肿瘤',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iuEZ8YFraPhn97vgO',
        name: '双动脉下型缺损',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iP3FAt7R5QC23KKCI',
        name: '符号、数字、模式测试',
        classId: 'iUp23OqppJM6CgD9L',
        className: '其他治疗',
        classRGB: 'rgba(202,207,213,1)'
      },
      {
        id: 'itHpw5t11LV6FNe7j',
        name: '高渗血症',
        classId: 'iXHk576IpEJYFo96N',
        className: '症状',
        classRGB: 'rgba(204,132,166,1)'
      },
      {
        id: 'iiilGpWkmPMOaEYYM',
        name: '血清变应原特异性IgE测定',
        classId: 'irTRCpA2xemKsKn6r',
        className: '检查',
        classRGB: 'rgba(212,161,113,1)'
      },
      {
        id: 'iTBJEFk7Oj8W0Nzsd',
        name: '缺氧性脑损伤',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iJEp1lLP6F7ic4xhb',
        name: '胆管癌',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iLzKyYNgBXF1Sk9Kp',
        name: '生长异常',
        classId: 'iXHk576IpEJYFo96N',
        className: '症状',
        classRGB: 'rgba(204,132,166,1)'
      },
      {
        id: 'illDZUckFnovLgCKG',
        name: '辅助（术后）放疗',
        classId: 'iUp23OqppJM6CgD9L',
        className: '其他治疗',
        classRGB: 'rgba(202,207,213,1)'
      },
      {
        id: 'ixIiGE48glolemJhB',
        name: 'CD20单抗',
        classId: 'iuXCxYL3OUwjvaOxB',
        className: '药物',
        classRGB: 'rgba(184,49,118,1)'
      },
      {
        id: 'iVi2G9YgHlWt69Ilv',
        name: '川崎病',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iPAODcwHuAKyKHKLR',
        name: '肝豆状核变性',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'i9EWXAD5VPVzfbuB0',
        name: '震颤性谵妄',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'ioxoeFmfHP2xntpMu',
        name: 'GAD',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'i6PugPS6tGZa1s4Zs',
        name: '单纯母乳喂养',
        classId: 'iZLd5bA5HdvWID3Fl',
        className: '社会学',
        classRGB: 'rgba(158,28,219,1)'
      },
      {
        id: 'iUkRX3HAWW9sXfxhn',
        name: '软组织肉瘤',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'ipyorvxIlWbZRXm63',
        name: '脑膜炎',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iXCcogRvCuH4wdKBt',
        name: '产后抑郁症',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iQvmYxVJElBF4Or3w',
        name: '周围神经病变',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iKm4lq4NPhmWo9DNR',
        name: '胰腺外分泌功能障碍',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iBro9PdQODgL39w7p',
        name: '原发性腭裂',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'ij9gMXnZmukvFM1E1',
        name: '压迫感',
        classId: 'iXHk576IpEJYFo96N',
        className: '症状',
        classRGB: 'rgba(204,132,166,1)'
      },
      {
        id: 'iQ9ChrSptowjtjNSy',
        name: '胸水',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'ixXWRvxDaIsVSyxoD',
        name: 'HLH',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iq5h2PohE5J9TlIPF',
        name: '网织红细胞增多',
        classId: 'iXHk576IpEJYFo96N',
        className: '症状',
        classRGB: 'rgba(204,132,166,1)'
      },
      {
        id: 'idCGeSk3ZRBEGM26I',
        name: '多学科诊断小组',
        classId: 'irTRCpA2xemKsKn6r',
        className: '检查',
        classRGB: 'rgba(212,161,113,1)'
      },
      {
        id: 'io26IFrdJ0W82PuPr',
        name: '隐睾',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'ij6TOtJ4xLNAem5Be',
        name: '轻度情绪障碍',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iGvTDyNuvmzYEASu3',
        name: '头孢三嗪',
        classId: 'iuXCxYL3OUwjvaOxB',
        className: '药物',
        classRGB: 'rgba(184,49,118,1)'
      },
      {
        id: 'iIQNTUaY9hvHGAVcq',
        name: '成人哮喘',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'itlOFZid368phOa4e',
        name: 'SMA-Ⅲ型',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iQjPrMPeK5SHZEwKl',
        name: '先天性梅毒',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'i6yc0YUY53EiuQfFE',
        name: '尿中失钾',
        classId: 'iXHk576IpEJYFo96N',
        className: '症状',
        classRGB: 'rgba(204,132,166,1)'
      },
      {
        id: 'infRGgIJ8opzFkdqE',
        name: '破伤风',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iGyj5vIw7QvT2WMqW',
        name: '高氨血症',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'i1fb2BP900rSLyGv9',
        name: '婴儿血管外皮细胞瘤',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'ijrFpBp7G2IiwnJ4J',
        name: '肝硬化',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iYGmwTOOL58M7kJlc',
        name: '脑水肿',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iOKj7nkrvng60qpEm',
        name: '弓形虫病',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iPq7lE6BV4q8RUbld',
        name: '脑炎',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'ihi4xY8l5oSfuW0DI',
        name: '积极预防',
        classId: 'iUp23OqppJM6CgD9L',
        className: '其他治疗',
        classRGB: 'rgba(202,207,213,1)'
      },
      {
        id: 'igVVloEFQavtHFlor',
        name: '腺体炎性反应',
        classId: 'iXHk576IpEJYFo96N',
        className: '症状',
        classRGB: 'rgba(204,132,166,1)'
      },
      {
        id: 'i6mWGY59qhRTWIY2x',
        name: 'Turner综合征',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'ifqdMf3YGwQQeJ51Q',
        name: '免疫抑制性肺损伤',
        classId: 'iZLd5bA5HdvWID3Fl',
        className: '社会学',
        classRGB: 'rgba(158,28,219,1)'
      },
      {
        id: 'iVLaeuL4UCnRD2v9X',
        name: '惊恐障碍',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'idHsgq3Dbbo6v2I0s',
        name: '下消化道出血',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'ilfFZRM4JVSbsMaIc',
        name: '神经源性膀胱',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iuHkyZ3vovwaGUkBL',
        name: '中枢性性早熟',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'itkCUaYObFdbILsX5',
        name: '口服抗生素',
        classId: 'iuXCxYL3OUwjvaOxB',
        className: '药物',
        classRGB: 'rgba(184,49,118,1)'
      },
      {
        id: 'isDbZ4d8ABydk6EKi',
        name: 'ARDS',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iEYYJE3d2soMw9G4p',
        name: '颈纤维瘤',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iWdovjudepLjtbC6C',
        name: '消化道钡餐检查',
        classId: 'irTRCpA2xemKsKn6r',
        className: '检查',
        classRGB: 'rgba(212,161,113,1)'
      },
      {
        id: 'ifjN7g3Ig5AhFKIzX',
        name: '腹主动脉瘤',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'i7ICj2ZYmr4U1TvDm',
        name: '增厚伴淋巴样细胞浸润',
        classId: 'iXHk576IpEJYFo96N',
        className: '症状',
        classRGB: 'rgba(204,132,166,1)'
      },
      {
        id: 'iL7Ui3l7u2JdUwlBa',
        name: 'HCMV感染',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iKeq8pYbRSStSZ7gW',
        name: '常规治疗',
        classId: 'iUp23OqppJM6CgD9L',
        className: '其他治疗',
        classRGB: 'rgba(202,207,213,1)'
      },
      {
        id: 'iFAi1HyBrahzbENWB',
        name: '类癌综合征',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iaIi0LV5n1OxR7Lc3',
        name: '东方人',
        classId: 'ihBa4NMerEmwPUd4R',
        className: '流行病学',
        classRGB: 'rgba(61,183,42,1)'
      },
      {
        id: 'itkw2yFYLcQLW4anW',
        name: '心痛定',
        classId: 'iuXCxYL3OUwjvaOxB',
        className: '药物',
        classRGB: 'rgba(184,49,118,1)'
      },
      {
        id: 'iElMlw6xKihdqKDwY',
        name: '脾肿大',
        classId: 'iXHk576IpEJYFo96N',
        className: '症状',
        classRGB: 'rgba(204,132,166,1)'
      },
      {
        id: 'ilsOrAXuWyr5ZOY0I',
        name: '伤寒感染',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iUOO5YHbADXLHRVTh',
        name: '脑室周围-脑室内出血',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iwireCvxlZmD1PsKA',
        name: '深反射亢进',
        classId: 'iXHk576IpEJYFo96N',
        className: '症状',
        classRGB: 'rgba(204,132,166,1)'
      },
      {
        id: 'izIdxdf8wVARGwg7z',
        name: 'Hb Bart胎儿水肿综合征',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iaLzRaUNifhS3pM3P',
        name: '输尿管重复畸形',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'i5w1zsVJiCMCYu8c6',
        name: '病毒性脑炎',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'ikgBWZQ8TrycDQ1He',
        name: '6%至17%',
        classId: 'ihBa4NMerEmwPUd4R',
        className: '流行病学',
        classRGB: 'rgba(61,183,42,1)'
      },
      {
        id: 'iwNBY0PLg0xSITxox',
        name: '转移性乳腺癌',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iIfehu0FTM7JuQHHS',
        name: '急性胰腺炎',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iw1ApkrmjHsKrWGf7',
        name: '功能性消化不良',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iMT6dOhvIiYv4oLf1',
        name: '活性药物',
        classId: 'iuXCxYL3OUwjvaOxB',
        className: '药物',
        classRGB: 'rgba(184,49,118,1)'
      },
      {
        id: 'iRzypp3JS7RvYN3Hz',
        name: '自发性早产',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'ipC9vPaAPivlpHBuM',
        name: '去铁酮',
        classId: 'iuXCxYL3OUwjvaOxB',
        className: '药物',
        classRGB: 'rgba(184,49,118,1)'
      },
      {
        id: 'iOXM8O3xqfEKNDiQJ',
        name: 'Wernicke脑病',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'i9zUkcf1RwRizBGTB',
        name: '妊娠期高血压',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'i4jz1j3H8Uy5jeoDO',
        name: '慢阻肺',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iFhyi904elKmcg4sO',
        name: '第 2 级：轻度持续',
        classId: 'ixTH16t2y47m1ZLgM',
        className: '其他',
        classRGB: 'rgba(61,125,242,1)'
      },
      {
        id: 'iWtX9Q3LkByuCsDPE',
        name: '皮下及深部肌肉脓肿',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iIksBoSNjG77ZoA9X',
        name: '肾病综合征',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iG4R0GQh9JfIKN97e',
        name: '呼吸量测定',
        classId: 'irTRCpA2xemKsKn6r',
        className: '检查',
        classRGB: 'rgba(212,161,113,1)'
      },
      {
        id: 'inZ9jpR16mTiEY1AM',
        name: '广泛性焦虑障碍',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iEkK3RTIYVO77CTLa',
        name: '铅中毒',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iawNAlqu5d8v6Nq7i',
        name: '血清总胆红素',
        classId: 'irTRCpA2xemKsKn6r',
        className: '检查',
        classRGB: 'rgba(212,161,113,1)'
      },
      {
        id: 'iinI2fg2gfAUXdf9X',
        name: '大胎盘',
        classId: 'iXHk576IpEJYFo96N',
        className: '症状',
        classRGB: 'rgba(204,132,166,1)'
      },
      {
        id: 'iwMOteX0TOTj7waRA',
        name: '化脑',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'ifLpnxrV2TKWW6arW',
        name: '麻风病',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'isYfv5XDIDxe6CHPR',
        name: '非ST段抬高型心肌梗死',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'i5cMFbd7QCK1Vg4ST',
        name: '胃食管反流',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iTSNhgHMaCW5UHH3B',
        name: '食物中毒',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iIQugcMdPlvC74h6z',
        name: 'AHF',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'i1f1WH7homlYOdxFE',
        name: '苯妥英钠',
        classId: 'iZLd5bA5HdvWID3Fl',
        className: '社会学',
        classRGB: 'rgba(158,28,219,1)'
      },
      {
        id: 'i3cnEQ1ZZfQv1KyEH',
        name: '疲倦',
        classId: 'iXHk576IpEJYFo96N',
        className: '症状',
        classRGB: 'rgba(204,132,166,1)'
      },
      {
        id: 'iXffLVR2nMJqfSK1U',
        name: '高反应者',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'i6jpIYRzjHWGaZg2u',
        name: '对惊恐发作的担心',
        classId: 'iXHk576IpEJYFo96N',
        className: '症状',
        classRGB: 'rgba(204,132,166,1)'
      },
      {
        id: 'iaL5NUSsx1lKrgQ5o',
        name: '小儿哮喘',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iYz0t8ZwsWqhX66jc',
        name: '腱索断裂',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iBiDYXsaEPPTn3nRR',
        name: '呼出气一氧化氮 (eNO)',
        classId: 'irTRCpA2xemKsKn6r',
        className: '检查',
        classRGB: 'rgba(212,161,113,1)'
      },
      {
        id: 'iwDS89kunh7M7EiLw',
        name: 'HUS',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iszqGhbrWLEokgUZL',
        name: '女性不育症',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'i51gmTfskN14hsTOD',
        name: '孕酮类药物',
        classId: 'iuXCxYL3OUwjvaOxB',
        className: '药物',
        classRGB: 'rgba(184,49,118,1)'
      },
      {
        id: 'iFTTSmNSLSelzN1Fa',
        name: '感染性腹泻',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'ipmXiAxEaUo3Y4sFU',
        name: '血小板抗体测定',
        classId: 'irTRCpA2xemKsKn6r',
        className: '检查',
        classRGB: 'rgba(212,161,113,1)'
      },
      {
        id: 'ijvONJk3KM8nZCvYR',
        name: '面部特征',
        classId: 'iZLd5bA5HdvWID3Fl',
        className: '社会学',
        classRGB: 'rgba(158,28,219,1)'
      },
      {
        id: 'iRrHmDA5qcQMWGOel',
        name: '阴道菌群失调',
        classId: 'iZLd5bA5HdvWID3Fl',
        className: '社会学',
        classRGB: 'rgba(158,28,219,1)'
      },
      {
        id: 'i03oguRZaBqQh9rB3',
        name: '卡那霉素',
        classId: 'iZLd5bA5HdvWID3Fl',
        className: '社会学',
        classRGB: 'rgba(158,28,219,1)'
      },
      {
        id: 'iqbzCdMpOEgE95Rvk',
        name: '肾盂肾炎',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'ivHIqhaC166t78Bck',
        name: '慢性髓性白血病',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iIA18AZSeP7wieXst',
        name: '精神心理异常',
        classId: 'iXHk576IpEJYFo96N',
        className: '症状',
        classRGB: 'rgba(204,132,166,1)'
      },
      {
        id: 'in1kV4KF9vJ8EzYX1',
        name: '男性化表现',
        classId: 'iXHk576IpEJYFo96N',
        className: '症状',
        classRGB: 'rgba(204,132,166,1)'
      },
      {
        id: 'i5kmZTKxPYzyZMSSP',
        name: '生殖细胞性肿瘤',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iF02IizwfkEfFvfwM',
        name: '疣状癌',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'ir3VXy8mQoMvt30uE',
        name: '富含嘌呤类的食物',
        classId: 'iZLd5bA5HdvWID3Fl',
        className: '社会学',
        classRGB: 'rgba(158,28,219,1)'
      },
      {
        id: 'i5hHC6lQ1IHBgoidY',
        name: '31%',
        classId: 'ihBa4NMerEmwPUd4R',
        className: '流行病学',
        classRGB: 'rgba(61,183,42,1)'
      },
      {
        id: 'iOjTxwmjnkcrLmnDJ',
        name: '米索前列醇',
        classId: 'ixTH16t2y47m1ZLgM',
        className: '其他',
        classRGB: 'rgba(61,125,242,1)'
      },
      {
        id: 'iMKyF50DdRKzr1UKm',
        name: '腹泻',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iRbY78DnMJUIVaCnu',
        name: '床边食管调搏',
        classId: 'irTRCpA2xemKsKn6r',
        className: '检查',
        classRGB: 'rgba(212,161,113,1)'
      },
      {
        id: 'izJogVLesABTuLD0h',
        name: '持续性抑郁症',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'ixA94ipR92iyjNtfX',
        name: '每年有 1000 到 2000 人',
        classId: 'ihBa4NMerEmwPUd4R',
        className: '流行病学',
        classRGB: 'rgba(61,183,42,1)'
      },
      {
        id: 'ixLWaVHxewaXtPBPD',
        name: '垂体功能减退',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'i8MqFDcro0nI7mojg',
        name: '代谢障碍',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iRzkds9P56XyFUQ4L',
        name: '中毒性疾病',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iswcqO5LuSftWx1m6',
        name: '巨细胞病毒感染',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iNtf3vF44rq4EDAaV',
        name: '天津',
        classId: 'ihBa4NMerEmwPUd4R',
        className: '流行病学',
        classRGB: 'rgba(61,183,42,1)'
      },
      {
        id: 'iTDV5SvBRoQAqwExl',
        name: '总铁、总铁结合力',
        classId: 'irTRCpA2xemKsKn6r',
        className: '检查',
        classRGB: 'rgba(212,161,113,1)'
      },
      {
        id: 'imUfSOe5Oz29gvHFm',
        name: '眼神发呆',
        classId: 'iXHk576IpEJYFo96N',
        className: '症状',
        classRGB: 'rgba(204,132,166,1)'
      },
      {
        id: 'i83Rgvdot4lSgG5cN',
        name: '双侧乳腺X线检查',
        classId: 'irTRCpA2xemKsKn6r',
        className: '检查',
        classRGB: 'rgba(212,161,113,1)'
      },
      {
        id: 'ihveegVSIQkd9kCCO',
        name: '缺血性卒中',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iF25KH7SKLH9qTaul',
        name: 'Mohs手术治疗',
        classId: 'i3w0Whz9tIyh7qtIt',
        className: '手术治疗',
        classRGB: 'rgba(80,224,158,1)'
      },
      {
        id: 'iMZAvL3XnTwjHMADL',
        name: '凝血并发症',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'imjqZDpZFW1y2Pelw',
        name: '肺吸虫病',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'ibdjfAQlYT31BDRG2',
        name: '感染性心内膜炎',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iRGqL2M1bHNPjJrH0',
        name: '溃疡',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iUuz2JXgxOZqvPFLm',
        name: '宫内发育迟缓',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iP3nYK1yjnaU1QdtR',
        name: '免疫抑制剂',
        classId: 'i3w0Whz9tIyh7qtIt',
        className: '手术治疗',
        classRGB: 'rgba(80,224,158,1)'
      },
      {
        id: 'ib3pwHWZnq8VjpGPm',
        name: 'EB病毒感染',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iIODdKp9z5A4MjqdK',
        name: '急性再障',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iRgxXjEzvSbOimLmM',
        name: '腺泡型软组织肉瘤',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iJ0IqdIetsTZsyn8H',
        name: '呼吸音粗糙',
        classId: 'iXHk576IpEJYFo96N',
        className: '症状',
        classRGB: 'rgba(204,132,166,1)'
      },
      {
        id: 'iJHgYd0DOCB4QRxc6',
        name: '高血压',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iINSVMdy9pGHzKrVB',
        name: '5%',
        classId: 'ihBa4NMerEmwPUd4R',
        className: '流行病学',
        classRGB: 'rgba(61,183,42,1)'
      },
      {
        id: 'itPELyHwlZ37oL7yt',
        name: '既往早产',
        classId: 'iZLd5bA5HdvWID3Fl',
        className: '社会学',
        classRGB: 'rgba(158,28,219,1)'
      },
      {
        id: 'ifuzCgx1vKEC4f4BP',
        name: '经典型',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'imBdQrfyEiQsE0tAF',
        name: '放射性核素治疗',
        classId: 'iuXCxYL3OUwjvaOxB',
        className: '药物',
        classRGB: 'rgba(184,49,118,1)'
      },
      {
        id: 'icuW06J78uKKh4Kko',
        name: '维生素B12缺乏',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'i5xSoM49POGWqhwwL',
        name: '脑病',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iJ9NyYh0iRGDhC0pc',
        name: '肺脓疡',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'imiMEXzg2ir3SAugx',
        name: '磨牙症',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'iIyowLHk2V0WrDFC5',
        name: '慢病毒感染',
        classId: 'idvYg0yfbRdrlrZK5',
        className: '疾病',
        classRGB: 'rgba(53,167,176,1)'
      },
      {
        id: 'igs3CgOY6ZdTuIFk8',
        name: '目光发直',
        classId: 'iXHk576IpEJYFo96N',
        className: '症状',
        classRGB: 'rgba(204,132,166,1)'
      }
    ],
    edges: [
      {
        fromClass: 'iIfehu0FTM7JuQHHS',
        toClass: 'i1i3MYqugBmv2HBa5',
        edgeTypeId: 'iCsIdeNrYQzFiGyMS',
        name: '手术治疗',
        rank: 0
      },
      {
        fromClass: 'iYRGyoUA6axTbbPR2',
        toClass: 'imW4BEo5B6T8mAFTR',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'ihXORhr1YZlDNRNi3',
        toClass: 'iF25KH7SKLH9qTaul',
        edgeTypeId: 'iCsIdeNrYQzFiGyMS',
        name: '手术治疗',
        rank: 0
      },
      {
        fromClass: 'itcPoSbTQugcmjy7f',
        toClass: 'itkw2yFYLcQLW4anW',
        edgeTypeId: 'iXbLDrqJwNc88b9dc',
        name: '药物治疗',
        rank: 0
      },
      {
        fromClass: 'imiMEXzg2ir3SAugx',
        toClass: 'imdCK11AVzXto5YVS',
        edgeTypeId: 'iFNHpKF4BV5YeJtgZ',
        name: '鉴别诊断',
        rank: 0
      },
      {
        fromClass: 'idHsgq3Dbbo6v2I0s',
        toClass: 'iOdl9N9qIeAFXSTd9',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'iJHgYd0DOCB4QRxc6',
        toClass: 'iUljQi6J0NYPyDDDc',
        edgeTypeId: 'iovBAm578ajerqZnz',
        name: '相关（转化）',
        rank: 0
      },
      {
        fromClass: 'iFTTSmNSLSelzN1Fa',
        toClass: 'iyDJZTxg8lFlMQNbc',
        edgeTypeId: 'ieKYfWtRhIUbTdQ94',
        name: '传播途径',
        rank: 0
      },
      {
        fromClass: 'iRhlZMRnqj1XO8z3a',
        toClass: 'ikpcsp9EO7eTBfC2a',
        edgeTypeId: 'igCLLmF79EtOBtP1m',
        name: '病理分型',
        rank: 0
      },
      {
        fromClass: 'iYasL1pV4TTlVgRFm',
        toClass: 'igDU2bJIULY50edrO',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'is3AbyUYpVHo7FbG2',
        toClass: 'iG9OJYiaIit0M7M2K',
        edgeTypeId: 'i3znQjKI75XcsZkZa',
        name: '多发群体',
        rank: 0
      },
      {
        fromClass: 'il4dfJJWOHETPtxIl',
        toClass: 'iwireCvxlZmD1PsKA',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'icuW06J78uKKh4Kko',
        toClass: 'igs3CgOY6ZdTuIFk8',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'ib3pwHWZnq8VjpGPm',
        toClass: 'i7ICj2ZYmr4U1TvDm',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'i7nqkGlhHkIvG14Fm',
        toClass: 'illDZUckFnovLgCKG',
        edgeTypeId: 'iQRsVvYtm4uXmZp9P',
        name: '放射治疗',
        rank: 0
      },
      {
        fromClass: 'iXsX5h7zIMhNOeG4u',
        toClass: 'iJP5kWqtWnZJ326I4',
        edgeTypeId: 'icBm5tcdfgQ8zywB8',
        name: '预防',
        rank: 0
      },
      {
        fromClass: 'iwQfTX7hOPAdGbEJc',
        toClass: 'iF1JqrQCoZZ70Yb1z',
        edgeTypeId: 'iOAqb0O0YDDkSpHto',
        name: '实验室检查',
        rank: 0
      },
      {
        fromClass: 'ij4gve5iYgujoMJHd',
        toClass: 'i5xSoM49POGWqhwwL',
        edgeTypeId: 'iZca9bTKT8eelrrTw',
        name: '并发症',
        rank: 0
      },
      {
        fromClass: 'iEkK3RTIYVO77CTLa',
        toClass: 'i5xSoM49POGWqhwwL',
        edgeTypeId: 'iZca9bTKT8eelrrTw',
        name: '并发症',
        rank: 0
      },
      {
        fromClass: 'i8MqFDcro0nI7mojg',
        toClass: 'i5xSoM49POGWqhwwL',
        edgeTypeId: 'iovBAm578ajerqZnz',
        name: '相关（转化）',
        rank: 0
      },
      {
        fromClass: 'i0Sk0Vr9Koq3I1OVl',
        toClass: 'i5xSoM49POGWqhwwL',
        edgeTypeId: 'iZca9bTKT8eelrrTw',
        name: '并发症',
        rank: 0
      },
      {
        fromClass: 'iGyj5vIw7QvT2WMqW',
        toClass: 'i5xSoM49POGWqhwwL',
        edgeTypeId: 'iovBAm578ajerqZnz',
        name: '相关（转化）',
        rank: 0
      },
      {
        fromClass: 'i9rD0JgNu9dKlWb9k',
        toClass: 'i5xSoM49POGWqhwwL',
        edgeTypeId: 'iovBAm578ajerqZnz',
        name: '相关（转化）',
        rank: 0
      },
      {
        fromClass: 'iPq7lE6BV4q8RUbld',
        toClass: 'i5xSoM49POGWqhwwL',
        edgeTypeId: 'iFNHpKF4BV5YeJtgZ',
        name: '鉴别诊断',
        rank: 0
      },
      {
        fromClass: 'iDcptoTus4OsvXDvS',
        toClass: 'i5xSoM49POGWqhwwL',
        edgeTypeId: 'igCLLmF79EtOBtP1m',
        name: '病理分型',
        rank: 0
      },
      {
        fromClass: 'iRzkds9P56XyFUQ4L',
        toClass: 'i5xSoM49POGWqhwwL',
        edgeTypeId: 'iovBAm578ajerqZnz',
        name: '相关（转化）',
        rank: 0
      },
      {
        fromClass: 'iSvkjJOEm0JfYYDeu',
        toClass: 'iSsDyDVSkQA1WDo13',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'iUkRX3HAWW9sXfxhn',
        toClass: 'iUGcywItsLPVjljwB',
        edgeTypeId: 'iFNHpKF4BV5YeJtgZ',
        name: '鉴别诊断',
        rank: 0
      },
      {
        fromClass: 'ilfFZRM4JVSbsMaIc',
        toClass: 'ipJnIyZId4zIenLpx',
        edgeTypeId: 'iQFutXkBqVIWYFk6z',
        name: '影像学检查',
        rank: 0
      },
      {
        fromClass: 'i0Sk0Vr9Koq3I1OVl',
        toClass: 'iPkJOnJCBJ8tQQgH8',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'iMVVxLwqZH9ASbO6f',
        toClass: 'iVibN7AncgYGAzf54',
        edgeTypeId: 'iFNHpKF4BV5YeJtgZ',
        name: '鉴别诊断',
        rank: 0
      },
      {
        fromClass: 'iJ9NyYh0iRGDhC0pc',
        toClass: 'iVibN7AncgYGAzf54',
        edgeTypeId: 'iZca9bTKT8eelrrTw',
        name: '并发症',
        rank: 0
      },
      {
        fromClass: 'ihXORhr1YZlDNRNi3',
        toClass: 'iKeq8pYbRSStSZ7gW',
        edgeTypeId: 'ipNnYdtn9Aycmx1sm',
        name: '辅助治疗',
        rank: 0
      },
      {
        fromClass: 'iOKj7nkrvng60qpEm',
        toClass: 'iKq67vl8s8DBCqlMp',
        edgeTypeId: 'ieKYfWtRhIUbTdQ94',
        name: '传播途径',
        rank: 0
      },
      {
        fromClass: 'iBL7DW3oPQHmui7EQ',
        toClass: 'iQvmYxVJElBF4Or3w',
        edgeTypeId: 'i9crnNDeI2Uev0Idh',
        name: '相关（导致）',
        rank: 0
      },
      {
        fromClass: 'iXffLVR2nMJqfSK1U',
        toClass: 'iP3nYK1yjnaU1QdtR',
        edgeTypeId: 'iCsIdeNrYQzFiGyMS',
        name: '手术治疗',
        rank: 0
      },
      {
        fromClass: 'iJtZvKmJdkiocVmCB',
        toClass: 'iElMlw6xKihdqKDwY',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'iyVEP444LKRYDMVPA',
        toClass: 'iElMlw6xKihdqKDwY',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'iyXKYpbTEE7KwV1im',
        toClass: 'iElMlw6xKihdqKDwY',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'iBT1fiIVN41XUnMkB',
        toClass: 'iElMlw6xKihdqKDwY',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'iTe1Ci95Zt3Ihn1d5',
        toClass: 'iElMlw6xKihdqKDwY',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'iODXNifWrAJhAcZP9',
        toClass: 'iElMlw6xKihdqKDwY',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'iswcqO5LuSftWx1m6',
        toClass: 'iElMlw6xKihdqKDwY',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'ivHIqhaC166t78Bck',
        toClass: 'iElMlw6xKihdqKDwY',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'ifLpnxrV2TKWW6arW',
        toClass: 'iElMlw6xKihdqKDwY',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'ilsOrAXuWyr5ZOY0I',
        toClass: 'iElMlw6xKihdqKDwY',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'iHgSg3FbrFJWNNu4V',
        toClass: 'ifqyq9KmjegK8juDU',
        edgeTypeId: 'iWu6u4bt9ttxTdgVv',
        name: '风险评估因素',
        rank: 0
      },
      {
        fromClass: 'i9b3NIuo3NEZo7VrX',
        toClass: 'ifqyq9KmjegK8juDU',
        edgeTypeId: 'iwv0qnv1l3SHam8ZS',
        name: '病因',
        rank: 0
      },
      {
        fromClass: 'iIfehu0FTM7JuQHHS',
        toClass: 'iPTvFkKLwyNxw02kW',
        edgeTypeId: 'iGAztFuO4gpFG9Pnw',
        name: '组织学检查',
        rank: 0
      },
      {
        fromClass: 'iFWW8U8M8tClWAdah',
        toClass: 'izizZ65L5IsiHulqf',
        edgeTypeId: 'ipNnYdtn9Aycmx1sm',
        name: '辅助治疗',
        rank: 0
      },
      {
        fromClass: 'iFAi1HyBrahzbENWB',
        toClass: 'imBdQrfyEiQsE0tAF',
        edgeTypeId: 'iXbLDrqJwNc88b9dc',
        name: '药物治疗',
        rank: 0
      },
      {
        fromClass: 'ipyorvxIlWbZRXm63',
        toClass: 'iGvTDyNuvmzYEASu3',
        edgeTypeId: 'iXbLDrqJwNc88b9dc',
        name: '药物治疗',
        rank: 0
      },
      {
        fromClass: 'iMKyF50DdRKzr1UKm',
        toClass: 'iGvTDyNuvmzYEASu3',
        edgeTypeId: 'iXbLDrqJwNc88b9dc',
        name: '药物治疗',
        rank: 0
      },
      {
        fromClass: 'iBro9PdQODgL39w7p',
        toClass: 'il3rxFRkZIv5e6hoz',
        edgeTypeId: 'i2Oyn5Tah9vuMQXRb',
        name: '发病部位',
        rank: 0
      },
      {
        fromClass: 'iPAODcwHuAKyKHKLR',
        toClass: 'iIA18AZSeP7wieXst',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'ij6TOtJ4xLNAem5Be',
        toClass: 'i0ZEGXlkEvHNBRf7Q',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'iIQNTUaY9hvHGAVcq',
        toClass: 'iFhyi904elKmcg4sO',
        edgeTypeId: 'iq7JkdUajHAURpsaO',
        name: '阶段',
        rank: 0
      },
      {
        fromClass: 'iRLHmyX4eDijkDl7G',
        toClass: 'iRbY78DnMJUIVaCnu',
        edgeTypeId: 'iKun0HufMz1SQnBfe',
        name: '辅助检查',
        rank: 0
      },
      {
        fromClass: 'i1fb2BP900rSLyGv9',
        toClass: 'in1kV4KF9vJ8EzYX1',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'itlOFZid368phOa4e',
        toClass: 'icNp9uckPZb8ZlpZC',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'iNVF2Jx60HH7NTT5l',
        toClass: 'iWQ602qT9yYBXx1Oe',
        edgeTypeId: 'iXbLDrqJwNc88b9dc',
        name: '药物治疗',
        rank: 0
      },
      {
        fromClass: 'isYfv5XDIDxe6CHPR',
        toClass: 'ij9gMXnZmukvFM1E1',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'imqGgedvkLFXG8zb9',
        toClass: 'ij9gMXnZmukvFM1E1',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'iuOqPbn0PQdERH6ln',
        toClass: 'i74UxO1kxYkYnj8e0',
        edgeTypeId: 'ipNnYdtn9Aycmx1sm',
        name: '辅助治疗',
        rank: 0
      },
      {
        fromClass: 'i31bAbZ1ybvmJGsYA',
        toClass: 'iQ9ChrSptowjtjNSy',
        edgeTypeId: 'iZca9bTKT8eelrrTw',
        name: '并发症',
        rank: 0
      },
      {
        fromClass: 'iavC8KZ50oRKtBCxW',
        toClass: 'i4C7YTz59rKxeOLFW',
        edgeTypeId: 'iKun0HufMz1SQnBfe',
        name: '辅助检查',
        rank: 0
      },
      {
        fromClass: 'ikpcsp9EO7eTBfC2a',
        toClass: 'ikuoHAGES0newP0fl',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'iSvkjJOEm0JfYYDeu',
        toClass: 'ih0AbiQRPvBbsyVlb',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'iFrT8rUUsrt0Mb3Hj',
        toClass: 'ih0AbiQRPvBbsyVlb',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'izJogVLesABTuLD0h',
        toClass: 'i2eFeitlYjkk2sElE',
        edgeTypeId: 'idjFgh0SNZQhDMRwA',
        name: '预后状况',
        rank: 0
      },
      {
        fromClass: 'iL6NvP694583Gl219',
        toClass: 'iP3FAt7R5QC23KKCI',
        edgeTypeId: 'ipNnYdtn9Aycmx1sm',
        name: '辅助治疗',
        rank: 0
      },
      {
        fromClass: 'izEzyI2hRbNOwcIoY',
        toClass: 'imJBpEXV3rFb08Sdj',
        edgeTypeId: 'iceJCoRLgDIspUogv',
        name: '发病率',
        rank: 0
      },
      {
        fromClass: 'i3JMLvUgejrEeSftF',
        toClass: 'iGWWAVQookWZJdzef',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'iIQNTUaY9hvHGAVcq',
        toClass: 'iJ3zb0v8aL9ZuGaXA',
        edgeTypeId: 'iOAqb0O0YDDkSpHto',
        name: '实验室检查',
        rank: 0
      },
      {
        fromClass: 'i5kmZTKxPYzyZMSSP',
        toClass: 'ifvm3yZcnwX7oMhgu',
        edgeTypeId: 'i2Oyn5Tah9vuMQXRb',
        name: '发病部位',
        rank: 0
      },
      {
        fromClass: 'iPkWEGpjtdeQ45SLa',
        toClass: 'iR3rXaW842ygxasez',
        edgeTypeId: 'i9crnNDeI2Uev0Idh',
        name: '相关（导致）',
        rank: 0
      },
      {
        fromClass: 'isI5mZlR3W5ot3nhv',
        toClass: 'ixXWRvxDaIsVSyxoD',
        edgeTypeId: 'i9crnNDeI2Uev0Idh',
        name: '相关（导致）',
        rank: 0
      },
      {
        fromClass: 'ikXCTUiL1zVSufttZ',
        toClass: 'ioO4Wf5CeXsjkhtET',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'i4jz1j3H8Uy5jeoDO',
        toClass: 'i3u6BYORfjtrKobcj',
        edgeTypeId: 'iwv0qnv1l3SHam8ZS',
        name: '病因',
        rank: 0
      },
      {
        fromClass: 'iuvAe6iBzrAj9mTgb',
        toClass: 'inPSVnDwZb7hcxBVS',
        edgeTypeId: 'i9crnNDeI2Uev0Idh',
        name: '相关（导致）',
        rank: 0
      },
      {
        fromClass: 'iL7Ui3l7u2JdUwlBa',
        toClass: 'inPSVnDwZb7hcxBVS',
        edgeTypeId: 'i9crnNDeI2Uev0Idh',
        name: '相关（导致）',
        rank: 0
      },
      {
        fromClass: 'iQjPrMPeK5SHZEwKl',
        toClass: 'inPSVnDwZb7hcxBVS',
        edgeTypeId: 'i9crnNDeI2Uev0Idh',
        name: '相关（导致）',
        rank: 0
      },
      {
        fromClass: 'izIdxdf8wVARGwg7z',
        toClass: 'inPSVnDwZb7hcxBVS',
        edgeTypeId: 'i9crnNDeI2Uev0Idh',
        name: '相关（导致）',
        rank: 0
      },
      {
        fromClass: 'i1Ibo5DPlkx6TmJgr',
        toClass: 'inPSVnDwZb7hcxBVS',
        edgeTypeId: 'iovBAm578ajerqZnz',
        name: '相关（转化）',
        rank: 0
      },
      {
        fromClass: 'iF02IizwfkEfFvfwM',
        toClass: 'iZ9OLJqusPpIplLXh',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'iIODdKp9z5A4MjqdK',
        toClass: 'ihi4xY8l5oSfuW0DI',
        edgeTypeId: 'ipNnYdtn9Aycmx1sm',
        name: '辅助治疗',
        rank: 0
      },
      {
        fromClass: 'iaLzRaUNifhS3pM3P',
        toClass: 'iWsMPLVfVhEUE9yhX',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'i7LI7Ejz2fqTUaL8f',
        toClass: 'iNtf3vF44rq4EDAaV',
        edgeTypeId: 'i8ZWnyRqhophqeZ3M',
        name: '多发地区',
        rank: 0
      },
      {
        fromClass: 'izJogVLesABTuLD0h',
        toClass: 'izUEDM03FhjUQBmde',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'iRgxXjEzvSbOimLmM',
        toClass: 'iNa5xv7ERiSW348j8',
        edgeTypeId: 'im6GoDCgbjNuVeD45',
        name: '发病性别倾向',
        rank: 0
      },
      {
        fromClass: 'iuEZ8YFraPhn97vgO',
        toClass: 'iaIi0LV5n1OxR7Lc3',
        edgeTypeId: 'i3znQjKI75XcsZkZa',
        name: '多发群体',
        rank: 0
      },
      {
        fromClass: 'iUYyrsWQmuQs3FgAv',
        toClass: 'iq5h2PohE5J9TlIPF',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'iuOqPbn0PQdERH6ln',
        toClass: 'iq5h2PohE5J9TlIPF',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'iVjbJTuh7Mg6IlrrD',
        toClass: 'itHpw5t11LV6FNe7j',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'iYRGyoUA6axTbbPR2',
        toClass: 'i9EWXAD5VPVzfbuB0',
        edgeTypeId: 'iFNHpKF4BV5YeJtgZ',
        name: '鉴别诊断',
        rank: 0
      },
      {
        fromClass: 'iNVF2Jx60HH7NTT5l',
        toClass: 'ipmXiAxEaUo3Y4sFU',
        edgeTypeId: 'iOAqb0O0YDDkSpHto',
        name: '实验室检查',
        rank: 0
      },
      {
        fromClass: 'i2WeMi2KA0hXSIhmi',
        toClass: 'iiilGpWkmPMOaEYYM',
        edgeTypeId: 'iOAqb0O0YDDkSpHto',
        name: '实验室检查',
        rank: 0
      },
      {
        fromClass: 'ijrFpBp7G2IiwnJ4J',
        toClass: 'iTDV5SvBRoQAqwExl',
        edgeTypeId: 'iOAqb0O0YDDkSpHto',
        name: '实验室检查',
        rank: 0
      },
      {
        fromClass: 'iTBJEFk7Oj8W0Nzsd',
        toClass: 'i46O0vAZNllIJREwX',
        edgeTypeId: 'i9crnNDeI2Uev0Idh',
        name: '相关（导致）',
        rank: 0
      },
      {
        fromClass: 'ijrFpBp7G2IiwnJ4J',
        toClass: 'ijvONJk3KM8nZCvYR',
        edgeTypeId: 'iWu6u4bt9ttxTdgVv',
        name: '风险评估因素',
        rank: 0
      },
      {
        fromClass: 'iuHkyZ3vovwaGUkBL',
        toClass: 'irABP9MQKBRZY8WPo',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'i1qlhWQ1ihoCy8Ulu',
        toClass: 'iWtX9Q3LkByuCsDPE',
        edgeTypeId: 'iHOxJN8Hp5WctB54u',
        name: '相关（症状）',
        rank: 0
      },
      {
        fromClass: 'iyyjXRCVeka30wHqB',
        toClass: 'i1XnLZhtahGNLlhcw',
        edgeTypeId: 'iKun0HufMz1SQnBfe',
        name: '辅助检查',
        rank: 0
      },
      {
        fromClass: 'iJEp1lLP6F7ic4xhb',
        toClass: 'iPCq7EitSb47GQAXi',
        edgeTypeId: 'igCLLmF79EtOBtP1m',
        name: '病理分型',
        rank: 0
      },
      {
        fromClass: 'ijgU5kXzBpPFL8kGB',
        toClass: 'iVRQ6iGwZFGQQvVtX',
        edgeTypeId: 'iZca9bTKT8eelrrTw',
        name: '并发症',
        rank: 0
      },
      {
        fromClass: 'iqGgcMXFws8iJaZ6H',
        toClass: 'ij0wpZQcXgMcTbbzH',
        edgeTypeId: 'iKun0HufMz1SQnBfe',
        name: '辅助检查',
        rank: 0
      },
      {
        fromClass: 'ijtA7HlUmhciB2JVV',
        toClass: 'ixA94ipR92iyjNtfX',
        edgeTypeId: 'iceJCoRLgDIspUogv',
        name: '发病率',
        rank: 0
      },
      {
        fromClass: 'iYGmwTOOL58M7kJlc',
        toClass: 'i5gWl5T3eEhVIfqdR',
        edgeTypeId: 'iwv0qnv1l3SHam8ZS',
        name: '病因',
        rank: 0
      },
      {
        fromClass: 'i2VF7JB62dWEzFYd5',
        toClass: 'idCGeSk3ZRBEGM26I',
        edgeTypeId: 'iKun0HufMz1SQnBfe',
        name: '辅助检查',
        rank: 0
      },
      {
        fromClass: 'ijDH0NWRPlouCtBXL',
        toClass: 'iLzKyYNgBXF1Sk9Kp',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'i5cMFbd7QCK1Vg4ST',
        toClass: 'iw1ApkrmjHsKrWGf7',
        edgeTypeId: 'iFNHpKF4BV5YeJtgZ',
        name: '鉴别诊断',
        rank: 0
      },
      {
        fromClass: 'imjqZDpZFW1y2Pelw',
        toClass: 'iJ0IqdIetsTZsyn8H',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'iHkwHEfg08ty9zlh7',
        toClass: 'iBGHFNwXqXAR8D88b',
        edgeTypeId: 'ipNnYdtn9Aycmx1sm',
        name: '辅助治疗',
        rank: 0
      },
      {
        fromClass: 'i5KAvPvO9wWc5JIXg',
        toClass: 'igyQvFRtuoBqGtH4X',
        edgeTypeId: 'iVRrCDwhkzBjXf6un',
        name: '高危因素',
        rank: 0
      },
      {
        fromClass: 'iIyowLHk2V0WrDFC5',
        toClass: 'ipCgHCjzbeCc8ivgu',
        edgeTypeId: 'igCLLmF79EtOBtP1m',
        name: '病理分型',
        rank: 0
      },
      {
        fromClass: 'iTSNhgHMaCW5UHH3B',
        toClass: 'iVCwpOA7ZBYoxJREW',
        edgeTypeId: 'ijQAgY8JXLEdZd47Q',
        name: '筛查',
        rank: 0
      },
      {
        fromClass: 'iIQugcMdPlvC74h6z',
        toClass: 'itkCUaYObFdbILsX5',
        edgeTypeId: 'iXbLDrqJwNc88b9dc',
        name: '药物治疗',
        rank: 0
      },
      {
        fromClass: 'ixJ1HIgWlH3KcGQLt',
        toClass: 'i1f1WH7homlYOdxFE',
        edgeTypeId: 'iwv0qnv1l3SHam8ZS',
        name: '病因',
        rank: 0
      },
      {
        fromClass: 'iKm4lq4NPhmWo9DNR',
        toClass: 'igVVloEFQavtHFlor',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'ibdjfAQlYT31BDRG2',
        toClass: 'iYz0t8ZwsWqhX66jc',
        edgeTypeId: 'iZca9bTKT8eelrrTw',
        name: '并发症',
        rank: 0
      },
      {
        fromClass: 'i6mWGY59qhRTWIY2x',
        toClass: 'iLco8RNQvkU89Uj78',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'iHXx6XedjFliAgvyu',
        toClass: 'ir3VXy8mQoMvt30uE',
        edgeTypeId: 'iVRrCDwhkzBjXf6un',
        name: '高危因素',
        rank: 0
      },
      {
        fromClass: 'ixy1WCDGK5Y2yPHeR',
        toClass: 'iyn7KznrJc5YF5Bvq',
        edgeTypeId: 'iVRrCDwhkzBjXf6un',
        name: '高危因素',
        rank: 0
      },
      {
        fromClass: 'iYRGyoUA6axTbbPR2',
        toClass: 'iMT6dOhvIiYv4oLf1',
        edgeTypeId: 'iXbLDrqJwNc88b9dc',
        name: '药物治疗',
        rank: 0
      },
      {
        fromClass: 'iShSr0oQenc6tSiDz',
        toClass: 'iINSVMdy9pGHzKrVB',
        edgeTypeId: 'iIrpmR5YBmgnWmMGH',
        name: '死亡率',
        rank: 0
      },
      {
        fromClass: 'iVABEQgxUtkR0wwTD',
        toClass: 'iINSVMdy9pGHzKrVB',
        edgeTypeId: 'iceJCoRLgDIspUogv',
        name: '发病率',
        rank: 0
      },
      {
        fromClass: 'ioxoeFmfHP2xntpMu',
        toClass: 'iINSVMdy9pGHzKrVB',
        edgeTypeId: 'iceJCoRLgDIspUogv',
        name: '发病率',
        rank: 0
      },
      {
        fromClass: 'inhP74pX6KkfgaboS',
        toClass: 'iINSVMdy9pGHzKrVB',
        edgeTypeId: 'iceJCoRLgDIspUogv',
        name: '发病率',
        rank: 0
      },
      {
        fromClass: 'iKsRDpYkAU9E264uP',
        toClass: 'iINSVMdy9pGHzKrVB',
        edgeTypeId: 'iceJCoRLgDIspUogv',
        name: '发病率',
        rank: 0
      },
      {
        fromClass: 'inhP74pX6KkfgaboS',
        toClass: 'i5hHC6lQ1IHBgoidY',
        edgeTypeId: 'iceJCoRLgDIspUogv',
        name: '发病率',
        rank: 0
      },
      {
        fromClass: 'iMdSofiaA6SFGFmMH',
        toClass: 'iuFy0MHs9XQSLSm9N',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'iqgMp71v7PJ5mxwa8',
        toClass: 'iuFy0MHs9XQSLSm9N',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'iV95Hr4yIXumLy56c',
        toClass: 'iuFy0MHs9XQSLSm9N',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'i1OczJKZ12fhnyE7M',
        toClass: 'iuFy0MHs9XQSLSm9N',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'ipZePs2jU4DT31A35',
        toClass: 'iRrHmDA5qcQMWGOel',
        edgeTypeId: 'iWu6u4bt9ttxTdgVv',
        name: '风险评估因素',
        rank: 0
      },
      {
        fromClass: 'iRzypp3JS7RvYN3Hz',
        toClass: 'iRrHmDA5qcQMWGOel',
        edgeTypeId: 'iWu6u4bt9ttxTdgVv',
        name: '风险评估因素',
        rank: 0
      },
      {
        fromClass: 'iYlR0G7kxvdpVKCxU',
        toClass: 'iagFcdWUZIrJgGoJ7',
        edgeTypeId: 'iVRrCDwhkzBjXf6un',
        name: '高危因素',
        rank: 0
      },
      {
        fromClass: 'iwMOteX0TOTj7waRA',
        toClass: 'imUfSOe5Oz29gvHFm',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'iIksBoSNjG77ZoA9X',
        toClass: 'i6yc0YUY53EiuQfFE',
        edgeTypeId: 'irLDkBwPHuBlJFdte',
        name: '治疗后症状',
        rank: 0
      },
      {
        fromClass: 'iHgSg3FbrFJWNNu4V',
        toClass: 'i03oguRZaBqQh9rB3',
        edgeTypeId: 'iWu6u4bt9ttxTdgVv',
        name: '风险评估因素',
        rank: 0
      },
      {
        fromClass: 'iNNubO8csleHOYbDc',
        toClass: 'i6MIpWKvVQ0rtcFp0',
        edgeTypeId: 'iVRrCDwhkzBjXf6un',
        name: '高危因素',
        rank: 0
      },
      {
        fromClass: 'i1p2dqQIl5Ur5lqGl',
        toClass: 'i83Rgvdot4lSgG5cN',
        edgeTypeId: 'iQFutXkBqVIWYFk6z',
        name: '影像学检查',
        rank: 0
      },
      {
        fromClass: 'isDbZ4d8ABydk6EKi',
        toClass: 'ifqdMf3YGwQQeJ51Q',
        edgeTypeId: 'iwv0qnv1l3SHam8ZS',
        name: '病因',
        rank: 0
      },
      {
        fromClass: 'ixcfDmFnZQRDkt6PU',
        toClass: 'ipC9vPaAPivlpHBuM',
        edgeTypeId: 'iXbLDrqJwNc88b9dc',
        name: '药物治疗',
        rank: 0
      },
      {
        fromClass: 'idnln8bIqLBdM2rt9',
        toClass: 'i3bY8Cbga6v4Do2RU',
        edgeTypeId: 'iVRrCDwhkzBjXf6un',
        name: '高危因素',
        rank: 0
      },
      {
        fromClass: 'iGBQdMNscaoTKlh9x',
        toClass: 'iYB6Wg4tNb6zm4KWS',
        edgeTypeId: 'iTyDKjTOfFK26BgxU',
        name: '就诊科室',
        rank: 0
      },
      {
        fromClass: 'iMHg7iUB00o4gyYNY',
        toClass: 'iYB6Wg4tNb6zm4KWS',
        edgeTypeId: 'iTyDKjTOfFK26BgxU',
        name: '就诊科室',
        rank: 0
      },
      {
        fromClass: 'ipZePs2jU4DT31A35',
        toClass: 'itPELyHwlZ37oL7yt',
        edgeTypeId: 'iWu6u4bt9ttxTdgVv',
        name: '风险评估因素',
        rank: 0
      },
      {
        fromClass: 'iIQNTUaY9hvHGAVcq',
        toClass: 'iBiDYXsaEPPTn3nRR',
        edgeTypeId: 'iOAqb0O0YDDkSpHto',
        name: '实验室检查',
        rank: 0
      },
      {
        fromClass: 'ihveegVSIQkd9kCCO',
        toClass: 'iOXM8O3xqfEKNDiQJ',
        edgeTypeId: 'iFNHpKF4BV5YeJtgZ',
        name: '鉴别诊断',
        rank: 0
      },
      {
        fromClass: 'iPlkZkNGBE5Q5aayD',
        toClass: 'i86PRGIx6O4JWypZP',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'iAwtP6TGTRdwPOhuE',
        toClass: 'iG4R0GQh9JfIKN97e',
        edgeTypeId: 'iKun0HufMz1SQnBfe',
        name: '辅助检查',
        rank: 0
      },
      {
        fromClass: 'iXsX5h7zIMhNOeG4u',
        toClass: 'iBUChkbMt2J8c0XuJ',
        edgeTypeId: 'iwv0qnv1l3SHam8ZS',
        name: '病因',
        rank: 0
      },
      {
        fromClass: 'iK4oD2r4z5FlHDXVe',
        toClass: 'iE35bIe237CuJKZbT',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'iRGqL2M1bHNPjJrH0',
        toClass: 'iOjTxwmjnkcrLmnDJ',
        edgeTypeId: 'icBm5tcdfgQ8zywB8',
        name: '预防',
        rank: 0
      },
      {
        fromClass: 'ih782x0sx3aalYIer',
        toClass: 'i3cnEQ1ZZfQv1KyEH',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'i5w1zsVJiCMCYu8c6',
        toClass: 'i3cnEQ1ZZfQv1KyEH',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'i5cznnYD41B0mTF0D',
        toClass: 'i3cnEQ1ZZfQv1KyEH',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'iZi6AT6uyvwAILmC9',
        toClass: 'i3cnEQ1ZZfQv1KyEH',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'imqGgedvkLFXG8zb9',
        toClass: 'i3cnEQ1ZZfQv1KyEH',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'iLLKy5wQOMdBSND2X',
        toClass: 'iawNAlqu5d8v6Nq7i',
        edgeTypeId: 'ijQAgY8JXLEdZd47Q',
        name: '筛查',
        rank: 0
      },
      {
        fromClass: 'ixIjBLREDV53aanv2',
        toClass: 'iF581Y2xsrGdfV6oJ',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'iEYYJE3d2soMw9G4p',
        toClass: 'ikKkMXrt1hh9sShHt',
        edgeTypeId: 'i2Oyn5Tah9vuMQXRb',
        name: '发病部位',
        rank: 0
      },
      {
        fromClass: 'iUOO5YHbADXLHRVTh',
        toClass: 'iMlFXFHFu17f8vNF9',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'i6Ir9BP9FsFJs53WE',
        toClass: 'iMlFXFHFu17f8vNF9',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'iqbzCdMpOEgE95Rvk',
        toClass: 'iMlFXFHFu17f8vNF9',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'idjoYsgFfutKryESE',
        toClass: 'iMlFXFHFu17f8vNF9',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'i3IxbAcNjdP1WKoY1',
        toClass: 'iMlFXFHFu17f8vNF9',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'iYasL1pV4TTlVgRFm',
        toClass: 'iMlFXFHFu17f8vNF9',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'iwDS89kunh7M7EiLw',
        toClass: 'iMlFXFHFu17f8vNF9',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'ifixEk7ioYLfTek0j',
        toClass: 'iMlFXFHFu17f8vNF9',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'iMzS0cuFQ83B5XALB',
        toClass: 'iMlFXFHFu17f8vNF9',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'iZdHap8UKLRLoGX61',
        toClass: 'iMlFXFHFu17f8vNF9',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'i9rD0JgNu9dKlWb9k',
        toClass: 'iMlFXFHFu17f8vNF9',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'infRGgIJ8opzFkdqE',
        toClass: 'iMlFXFHFu17f8vNF9',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'io26IFrdJ0W82PuPr',
        toClass: 'ix2EyqiMlE9EJ9qha',
        edgeTypeId: 'iwv0qnv1l3SHam8ZS',
        name: '病因',
        rank: 0
      },
      {
        fromClass: 'iKUGwf4sY82rM8xdO',
        toClass: 'iXLM5LtY2Bm1bTw5o',
        edgeTypeId: 'igCLLmF79EtOBtP1m',
        name: '病理分型',
        rank: 0
      },
      {
        fromClass: 'ifuzCgx1vKEC4f4BP',
        toClass: 'i6PugPS6tGZa1s4Zs',
        edgeTypeId: 'iwv0qnv1l3SHam8ZS',
        name: '病因',
        rank: 0
      },
      {
        fromClass: 'iEK4yWhbssYPeE0pF',
        toClass: 'iPR32c3WrTkqBfBTR',
        edgeTypeId: 'iOAqb0O0YDDkSpHto',
        name: '实验室检查',
        rank: 0
      },
      {
        fromClass: 'ixLWaVHxewaXtPBPD',
        toClass: 'iszqGhbrWLEokgUZL',
        edgeTypeId: 'iZca9bTKT8eelrrTw',
        name: '并发症',
        rank: 0
      },
      {
        fromClass: 'i6KuiNffi3DiqiJB9',
        toClass: 'iinI2fg2gfAUXdf9X',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'ixy7Q5tbGo71xJlw2',
        toClass: 'iWdovjudepLjtbC6C',
        edgeTypeId: 'iQFutXkBqVIWYFk6z',
        name: '影像学检查',
        rank: 0
      },
      {
        fromClass: 'i9zUkcf1RwRizBGTB',
        toClass: 'ikgBWZQ8TrycDQ1He',
        edgeTypeId: 'iceJCoRLgDIspUogv',
        name: '发病率',
        rank: 0
      },
      {
        fromClass: 'iTBdNg9kHV3gpwxCE',
        toClass: 'iMZAvL3XnTwjHMADL',
        edgeTypeId: 'iovBAm578ajerqZnz',
        name: '相关（转化）',
        rank: 0
      },
      {
        fromClass: 'i2WeMi2KA0hXSIhmi',
        toClass: 'iUohsASQhOAli4hbl',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'iwNBY0PLg0xSITxox',
        toClass: 'i51gmTfskN14hsTOD',
        edgeTypeId: 'iXbLDrqJwNc88b9dc',
        name: '药物治疗',
        rank: 0
      },
      {
        fromClass: 'izoTIvlaujP6eace0',
        toClass: 'iobyLMOtZ5C4tLfDy',
        edgeTypeId: 'iWu6u4bt9ttxTdgVv',
        name: '风险评估因素',
        rank: 0
      },
      {
        fromClass: 'iAQ9sT2poa7Vj1zV4',
        toClass: 'ipHFddaKcRXmHOHrp',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'i6fTSUsqErNWbao4X',
        toClass: 'ipHFddaKcRXmHOHrp',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'iXCcogRvCuH4wdKBt',
        toClass: 'ibRAim0ZACMw1HBiw',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'inZ9jpR16mTiEY1AM',
        toClass: 'iFzDsOGSn8nSGO3PV',
        edgeTypeId: 'ipNnYdtn9Aycmx1sm',
        name: '辅助治疗',
        rank: 0
      },
      {
        fromClass: 'iszQFi7a1WPzGU3MU',
        toClass: 'iFzDsOGSn8nSGO3PV',
        edgeTypeId: 'ipNnYdtn9Aycmx1sm',
        name: '辅助治疗',
        rank: 0
      },
      {
        fromClass: 'iaL5NUSsx1lKrgQ5o',
        toClass: 'iFzDsOGSn8nSGO3PV',
        edgeTypeId: 'ipNnYdtn9Aycmx1sm',
        name: '辅助治疗',
        rank: 0
      },
      {
        fromClass: 'i7NZWm7s3Vodwq77C',
        toClass: 'iUuz2JXgxOZqvPFLm',
        edgeTypeId: 'iFNHpKF4BV5YeJtgZ',
        name: '鉴别诊断',
        rank: 0
      },
      {
        fromClass: 'iVi2G9YgHlWt69Ilv',
        toClass: 'ipWkEua4xwpW5ZP72',
        edgeTypeId: 'iceJCoRLgDIspUogv',
        name: '发病率',
        rank: 0
      },
      {
        fromClass: 'iVMIXSfw2KxiVaSk7',
        toClass: 'ipWkEua4xwpW5ZP72',
        edgeTypeId: 'iceJCoRLgDIspUogv',
        name: '发病率',
        rank: 0
      },
      {
        fromClass: 'iYhqIeBehGGIwFfAo',
        toClass: 'iVMwvNCTgbutvRgRw',
        edgeTypeId: 'igCLLmF79EtOBtP1m',
        name: '病理分型',
        rank: 0
      },
      {
        fromClass: 'iVLaeuL4UCnRD2v9X',
        toClass: 'i6jpIYRzjHWGaZg2u',
        edgeTypeId: 'i57JQocD3rlwWjCXj',
        name: '临床表现',
        rank: 0
      },
      {
        fromClass: 'ifjN7g3Ig5AhFKIzX',
        toClass: 'ii1Jh7sxSJ0uJWDjo',
        edgeTypeId: 'iQFutXkBqVIWYFk6z',
        name: '影像学检查',
        rank: 0
      },
      {
        fromClass: 'irbsghuPIBKY1Gv08',
        toClass: 'ixIiGE48glolemJhB',
        edgeTypeId: 'iXbLDrqJwNc88b9dc',
        name: '药物治疗',
        rank: 0
      }
    ]
  };
};

export const data5 = () => {
  return {
    classes: [
      {
        id: 'Solution',
        name: '方案',
        rgb: 'rgba(29, 167, 75, 1)',
        properties: ['公司']
      },
      { id: 'Place', name: '场所', rgb: '#DF8C4F', properties: [] },
      {
        id: 'Industry',
        name: '行业',
        rgb: 'rgba(92, 194, 187, 1)',
        properties: []
      },
      {
        id: 'Story',
        name: '事例',
        rgb: 'rgba(244, 3, 220, 1)',
        properties: []
      },
      {
        id: 'Intelligent_Device',
        name: '智能设备',
        rgb: 'rgba(60, 132, 255, 1)',
        properties: []
      },
      {
        id: 'Sensing_Device',
        name: '传感设备',
        rgb: 'rgba(111, 94, 230, 1)',
        properties: []
      },
      {
        id: 'Label',
        name: '标签',
        rgb: 'rgba(91, 189, 224, 1)',
        properties: []
      },
      {
        id: 'Application_Software',
        name: '应用软件',
        rgb: 'rgba(0, 81, 220, 1)',
        properties: []
      },
      {
        id: 'Application_System',
        name: '应用系统',
        rgb: '#0051DC',
        properties: []
      },
      {
        id: 'Purpose',
        name: '意图',
        rgb: 'rgba(234, 86, 68, 1)',
        properties: []
      },
      {
        id: 'State',
        name: '状态',
        rgb: 'rgba(81, 34, 214, 1)',
        properties: []
      },
      {
        id: 'Thing',
        name: '物',
        rgb: 'rgba(104, 122, 247, 1)',
        properties: []
      },
      {
        id: 'Person',
        name: '人',
        rgb: 'rgba(239, 89, 121, 1)',
        properties: []
      }
    ],
    edges: [
      {
        id: 'Solution_include_Story',
        name: '包含',
        fromClass: 'Solution',
        toClass: 'Story'
      },
      {
        id: 'Solution_attach_Industry',
        name: '关联',
        fromClass: 'Solution',
        toClass: 'Industry'
      },
      {
        id: 'Story_attach_Person',
        name: '关联',
        fromClass: 'Story',
        toClass: 'Person'
      },
      {
        id: 'Story_attach_Place',
        name: '关联',
        fromClass: 'Story',
        toClass: 'Place'
      },
      {
        id: 'Story_attach_Sensing_Device',
        name: '关联',
        fromClass: 'Story',
        toClass: 'Sensing_Device'
      },
      {
        id: 'Story_attach_Intelligent_Device',
        name: '关联',
        fromClass: 'Story',
        toClass: 'Intelligent_Device'
      },
      {
        id: 'Solution_use_Application_System',
        name: '使用',
        fromClass: 'Solution',
        toClass: 'Application_System'
      },
      {
        id: 'Application_System_include_Application_Software',
        name: '包含',
        fromClass: 'Application_System',
        toClass: 'Application_Software'
      },
      {
        id: 'Application_System_include_Sensing_Device',
        name: '包含',
        fromClass: 'Application_System',
        toClass: 'Sensing_Device'
      },
      {
        id: 'Application_System_include_Intelligent_Device',
        name: '包含',
        fromClass: 'Application_System',
        toClass: 'Intelligent_Device'
      },
      {
        id: 'Solution_include_Purpose',
        name: '包含',
        fromClass: 'Solution',
        toClass: 'Purpose'
      },
      {
        id: 'Story_attach_State',
        name: '关联',
        fromClass: 'Story',
        toClass: 'State'
      },
      {
        id: 'Thing_equal_Thing',
        name: '相同',
        fromClass: 'Thing',
        toClass: 'Thing'
      },
      {
        id: 'Place_equal_Thing',
        name: '相同',
        fromClass: 'Place',
        toClass: 'Thing'
      },
      {
        id: 'Thing_include_Thing',
        name: '包含',
        fromClass: 'Thing',
        toClass: 'Thing'
      },
      {
        id: 'Place_include_Place',
        name: '包含',
        fromClass: 'Place',
        toClass: 'Place'
      },
      {
        id: 'Place_subclassof_Place',
        name: '子类',
        fromClass: 'Place',
        toClass: 'Place'
      },
      {
        id: 'Thing_subclassof_Thing',
        name: '子类',
        fromClass: 'Thing',
        toClass: 'Thing'
      },
      {
        id: 'Person_subclassof_Person',
        name: '子类',
        fromClass: 'Person',
        toClass: 'Person'
      },
      {
        id: 'Sensing_Device_subclassof_Thing',
        name: '子类',
        fromClass: 'Sensing_Device',
        toClass: 'Thing'
      },
      {
        id: 'Intelligent_Device_subclassof_Thing',
        name: '子类',
        fromClass: 'Intelligent_Device',
        toClass: 'Thing'
      },
      {
        id: 'Person_subclassof_Thing',
        name: '子类',
        fromClass: 'Person',
        toClass: 'Thing'
      },
      {
        id: 'Place_equal_Place',
        name: '相同',
        fromClass: 'Place',
        toClass: 'Place'
      },
      {
        id: 'Label_include_Label',
        name: '包含',
        fromClass: 'Label',
        toClass: 'Label'
      },
      {
        id: 'Label_subclassof_Label',
        name: '子类',
        fromClass: 'Label',
        toClass: 'Label'
      },
      {
        id: 'Story_attach_Label',
        name: '关联',
        fromClass: 'Story',
        toClass: 'Label'
      },
      {
        id: 'Solution_attach_Label',
        name: '关联',
        fromClass: 'Solution',
        toClass: 'Label'
      },
      {
        id: 'Solution_attach_Place',
        name: '关联',
        fromClass: 'Solution',
        toClass: 'Place'
      }
    ]
  };
};

let data6 = () => {
  return {
    classes: [
      {
        id: 'product_200006411',
        name: '立杆式水质监测设备',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200070159',
        name: '用户信息传输装置 灰色 SD-F3CD500',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200354112',
        name: 'HXH03-1型超声波多普勒流速流向仪',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'iFR9gBH13i575B0pG',
        name: '一氧化碳浓度',
        classId: 'zhibiao',
        className: '指标',
        classRGB: 'rgba(132, 112, 168, 1)'
      },
      {
        id: 'i0KwCMOylrJA8CbbF',
        name: 'B相有功功率',
        classId: 'zhibiao',
        className: '指标',
        classRGB: 'rgba(132, 112, 168, 1)'
      },
      {
        id: 'product_200708171',
        name: '三相四线4G智能电表',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'solution_200092092',
        name: '工地智慧火灾防控解决方案',
        classId: 'solution',
        className: '方案',
        classRGB: '#425B8A'
      },
      {
        id: 'product_200129311',
        name: '苏州卫水九参微型水站',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_700010531',
        name: '光电直读有线远传多流速旋翼水表',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_100285411',
        name: 'CH2O 甲醛探测器 室内型（B2外壳） 继电器输出 显示',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'iGKYs2lA2JasWMuQb',
        name: 'I2C',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: 'product_200779181',
        name: 'F-SY100振弦式渗压计 F-SY100-1',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200522891',
        name: 'F9164-V200 视频RTU',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'solution_500133104',
        name: '消防泵房监测方案',
        classId: 'solution',
        className: '方案',
        classRGB: '#425B8A'
      },
      {
        id: 'i0PpM7VUmleHAcn10',
        name: 'DO',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: 'product_300226781',
        name: '无线数字液位变送器 LoRa',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'solution_200358311',
        name: '水产养殖水质监测方案',
        classId: 'solution',
        className: '方案',
        classRGB: '#425B8A'
      },
      {
        id: 'product_200050926',
        name: '用户信息传输装置',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200525351',
        name: 'DT‐WS100E 无线环境传感器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'valve_opening',
        name: '阀门开度',
        classId: 'Indicatortype',
        className: '指标类型',
        classRGB: '#C6986D'
      },
      {
        id: 'iWg6261o5w6aVbij5',
        name: '433无线',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: 'product_100069761',
        name: '全网通数传终端 UC3422',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: '500067271_AC_POWER_SUPPLY',
        name: '交流供电',
        classId: 'Powersupply',
        className: '供电方式',
        classRGB: '#7086A8'
      },
      {
        id: 'product_200505091',
        name: '压力传感器 0-10MPa',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'solution_200777211',
        name: '河长制水质监测系统解决方案',
        classId: 'solution',
        className: '方案',
        classRGB: '#425B8A'
      },
      {
        id: 'product_200057255',
        name: '雷达流量计',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'irbk8MUt14dU5WV3q',
        name: 'USB',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: 'product_200121802',
        name: '预警广播一体站 F-YJ100-L-LR',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200006528',
        name: '太阳能水文监测系统',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200007276',
        name: 'LoRa水压变送器 超高压量程 1.0级',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'solution_200118286',
        name: '海水/高氯废水中COD在线监测解决方案',
        classId: 'solution',
        className: '方案',
        classRGB: '#425B8A'
      },
      {
        id: '200137711_DC_POWER_SUPPLY',
        name: '直流供电',
        classId: 'Powersupply',
        className: '供电方式',
        classRGB: '#7086A8'
      },
      {
        id: 'product_200927031',
        name: '一体柜物联网关',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200911664',
        name: '雷达水位计(带4G模块+BT模块) 10m',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200721280',
        name: '海康威视人体测温筒机TBC-2617-3/PA',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200311711',
        name: '多参数水质检测仪',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200006477',
        name: '智能振弦式渗压计 0～350',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200579181',
        name: 'F-SY100振弦式渗压计 F-SY100-0.7',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200301901',
        name: '水浸报警器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200053550',
        name: '拉线式位移计',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200909561',
        name: '人员定位卡片标签',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200528014',
        name: 'AML-R1024-G液位传感器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_300208011',
        name: '在线数字pH传感器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'solution_200126080',
        name: '低功耗无线物联网解决方案（硬件部分）',
        classId: 'solution',
        className: '方案',
        classRGB: '#425B8A'
      },
      {
        id: 'product_200321691',
        name: 'IOT PASS系统',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'iQtYDFu3nQh0wkq9Y',
        name: '阀门开度',
        classId: 'zhibiao',
        className: '指标',
        classRGB: 'rgba(132, 112, 168, 1)'
      },
      {
        id: 'product_100227041',
        name: '无线数字液位变送器 ZigBee',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200991661',
        name: '雷达水位计(带4G模块+BT模块) 30m',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_900073146',
        name: '智能型蓝绿藻传感器AMT-LLZ300',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'solution_500303102',
        name: '智慧排水系统运维',
        classId: 'solution',
        className: '方案',
        classRGB: '#425B8A'
      },
      {
        id: 'product_200003702',
        name: 'LoRa水压变送器 负压及复合量程 0.5级',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'solution_200729321',
        name: '泵站能效提升及节电解决方案',
        classId: 'solution',
        className: '方案',
        classRGB: '#425B8A'
      },
      {
        id: 'product_200517101',
        name: '多参数水质检测仪 7.5',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200191711',
        name: '多参数水质控制器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'solution_200799411',
        name: '污水处理厂智能化管理方案',
        classId: 'solution',
        className: '方案',
        classRGB: '#425B8A'
      },
      {
        id: 'iKU1xXTx7rwoiiT1m',
        name: '光纤以太网',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: 'product_200955161',
        name: 'EasyDL零门槛AI开发平台',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200727781',
        name: 'AML-R1024-G浊度传感器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_300062514',
        name: '室内环境监测传感器 114 × 22 mm',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'solution_200092486',
        name: '数字3.0精细化智慧用电解决方案',
        classId: 'solution',
        className: '方案',
        classRGB: '#425B8A'
      },
      {
        id: 'product_200722616',
        name: '苏州卫水四合一水质在线分析仪',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200038787',
        name: '手持式土壤速测仪',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'solution_200019200',
        name: '智能式水泵机组管控系统',
        classId: 'solution',
        className: '方案',
        classRGB: '#425B8A'
      },
      {
        id: 'TAG20211020004215000001',
        name: '人工智能',
        classId: 'lycj',
        className: '领域场景',
        classRGB: '#83A3D7'
      },
      {
        id: 'iPwVbn3F1Rx8EvTJE',
        name: '温度',
        classId: 'zhibiao',
        className: '指标',
        classRGB: 'rgba(132, 112, 168, 1)'
      },
      {
        id: 'product_300205631',
        name: 'M30L超声波液位计',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_700030531',
        name: '水电一卡通智能水表',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_900216010',
        name: '数字IIC输出 陶瓷传感器模组',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200331112',
        name: '双网口16路RS232/485机架式以太网串口服务器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200094157',
        name: '水压报警器 TSM-01P（BLE）',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200509091',
        name: '变频器及机柜',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200007268',
        name: 'LoRa水压变送器 微压量程 0.5级',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_900017316',
        name: 'PT-W10Y无线液位变送器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200150611',
        name: 'LSH10-1型超声波多普勒流速仪',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200911260',
        name: 'LSH10-1P-2000S/600S型水平声学多普勒流速剖面仪（双波束）',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200720821',
        name: '雷达一体式流量计 F-LL100-30',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_100231444',
        name: '一体式智能电磁流量计',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200014557',
        name: '智慧用电安全卫士测控系统',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'iNdQZh83ksWkDhxIG',
        name: ' RS485',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: 'product_200031537',
        name: '一氧化碳探测器 ABS塑料 白色',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200003373',
        name: '1路RS232/485/422转16路光纤集线器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200321684',
        name: '轻松连 WS1 PRO-WiFi',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200087121',
        name: '微型水质多参数在线监测站',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: '100284140_DC_POWER_SUPPLY',
        name: '直流供电',
        classId: 'Powersupply',
        className: '供电方式',
        classRGB: '#7086A8'
      },
      {
        id: 'product_200528661',
        name: 'DT-WS110E40无线水质浊度传感器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200070119',
        name: 'LSH10-1QC超声波流速流量仪',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_500377141',
        name: 'NB-Iot物联网水表',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'iAT9bwcdFqMY56RP1',
        name: '人数',
        classId: 'zhibiao',
        className: '指标',
        classRGB: 'rgba(132, 112, 168, 1)'
      },
      {
        id: 'product_200078824',
        name: '土壤温度水分电导率三合一传感器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_300012820',
        name: 'CBOX云盒智能网关',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200923511',
        name: '苏州卫水总氮水质在线分析仪',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200714126',
        name: 'DC-DM地埋式积水监测设备',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200722431',
        name: '苏州卫水总磷水质在线分析仪',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'iLSfDwo9ZsvF9op8v',
        name: 'NB-IoT',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: 'product_700711208',
        name: '单相智能电能监测仪（LoRa）',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200922391',
        name: '动环监控主机数据采集器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_300226761',
        name: '无线数字液位变送器 GPRS',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'iQAX8Yvz2Y4XaKEZ6',
        name: '磷化氢浓度',
        classId: 'zhibiao',
        className: '指标',
        classRGB: 'rgba(132, 112, 168, 1)'
      },
      {
        id: 'product_200350311',
        name: '10口二层千兆网管型带4路数据口嵌入式工业以太网交换机',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200120016',
        name: 'LSH10-1P-22A型声学多普勒流速剖面仪（单波束）',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_100214971',
        name: '智能温度感应报警器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'iPoz6FzsQqm6cTjTr',
        name: '甲醛浓度',
        classId: 'zhibiao',
        className: '指标',
        classRGB: 'rgba(132, 112, 168, 1)'
      },
      {
        id: 'ie93RpFsfonZEpNVA',
        name: '蓝牙',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: 'product_200908614',
        name: '高效泵站节电成套设备 15kw',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200522421',
        name: '苏州卫水氨氮水质在线分析仪',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200088948',
        name: '28口二层千兆网管型机架式工业以太网交换机',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200728312',
        name: 'DT-WS112E10无线紫外线传感器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200321061',
        name: 'F-LSY100磁致式量水堰计',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200007284',
        name: 'LoRa水压变送器 超高压量程 0.5级',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200108688',
        name: '高效泵站节电成套设备 7.5kw',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_500051381',
        name: '空气质量检测仪AM7000',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200072729',
        name: 'NB-iot智能无线水浸传感器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200074155',
        name: '太阳能供电系统',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200311122',
        name: '双网口32路机架式以太网串口服务器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_700184188',
        name: 'HDP601 标准型 投入式液位变送器 HDP601S',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200009274',
        name: 'LoRa水压变送器 负压及复合量程 1.0级',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_300250301',
        name: '精巧型压力变送器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200111426',
        name: '卡轨式Wi-Fi双频工业无线AP',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200005773',
        name: 'RS485/422有源高速隔离中继器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_500255521',
        name: '卡轨式工业WIFI无线路由器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200528818',
        name: 'DT-WS135E10无线烟雾传感器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_900223071',
        name: '无线数字液位变送器 NB-IoT',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_700049281',
        name: '串口网关',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_500716102',
        name: '数字卡式智能水表',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_100214188',
        name: '智慧型在线多参数水质分析仪',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200973911',
        name: 'LSH10-1QM型时差法明渠流量计',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_500339711',
        name: 'AM1011A温湿度传感器模块',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200979181',
        name: 'F-SY100振弦式渗压计 F-SY100-2',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'solution_200085872',
        name: '微型水质自动监测站',
        classId: 'solution',
        className: '方案',
        classRGB: '#425B8A'
      },
      {
        id: 'product_900228701',
        name: '无线数字压力变送器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: '200721280_DC_POWER_SUPPLY',
        name: '直流供电',
        classId: 'Powersupply',
        className: '供电方式',
        classRGB: '#7086A8'
      },
      {
        id: 'product_200550101',
        name: 'LSH10-1A型手持超声波多普勒流速仪',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200791184',
        name: 'F-SY100振弦式渗压计 F-SY100-0.35',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'solution_200030890',
        name: '小区物业智慧消防安全解决方案',
        classId: 'solution',
        className: '方案',
        classRGB: '#425B8A'
      },
      {
        id: 'product_200528618',
        name: 'DT-WS110E20无线水质电导率传感器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_500251422',
        name: '壁挂式4G工业无线路由器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_100332212',
        name: 'LY-QX12系列微型环境监测站 LY-QX12M2B(温度、湿度、气压、光照度、噪音、pm2.5、pm10 和气体系列可选系列) RS485',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_700034106',
        name: 'JCJ175F 温湿度变送器(RS485）',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200005270',
        name: 'LoRa水压变送器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: '100041141_DC_POWER_SUPPLY',
        name: '直流供电',
        classId: 'Powersupply',
        className: '供电方式',
        classRGB: '#7086A8'
      },
      {
        id: 'product_200509041',
        name: '压力传感器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200046552',
        name: '20口二层全千兆机架式工业以太网交换机',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200009257',
        name: 'LoRa水压变送器 常规量程 0.5级',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200093372',
        name: '燃气报警器 CA-181-N',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'solution_200073196',
        name: '智慧篮球馆管理方案',
        classId: 'solution',
        className: '方案',
        classRGB: '#425B8A'
      },
      {
        id: 'product_200137711',
        name: '人流计数器 1.6米 从机2',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200005278',
        name: 'LoRa水压变送器 常规量程 1.0级',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200929514',
        name: '边缘物联系统V1.0',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200708100',
        name: '高效泵站节电成套设备 45kw',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200111442',
        name: '24口二层百兆网管型机架式工业以太网交换机',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200064944',
        name: '智能电表P3VI',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200920191',
        name: 'ble\\zigbee\\4g无线远程测控终端(太阳能版)',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'iA5qXC6uRMjXoSpWY',
        name: '甲醛浓度',
        classId: 'zhibiao',
        className: '指标',
        classRGB: 'rgba(132, 112, 168, 1)'
      },
      {
        id: 'product_500067271',
        name: 'LoRaWAN无线数据采集器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_900777531',
        name: 'RS232/485/422接口光纤转换器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'iQTfObYUnD3AbS738',
        name: '臭氧浓度',
        classId: 'zhibiao',
        className: '指标',
        classRGB: 'rgba(132, 112, 168, 1)'
      },
      {
        id: 'product_300153021',
        name: '磷化氢气体检测仪',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200917118',
        name: '多参数水质控制器 1',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200508691',
        name: '高效泵站节电成套设备 30kw',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200328851',
        name: 'DT-WS110E40无线水质浊度传感器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200002167',
        name: '双频千兆Wi-Fi 6工业级5G路由器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'solution_200050769',
        name: '智慧加油站解决方案',
        classId: 'solution',
        className: '方案',
        classRGB: '#425B8A'
      },
      {
        id: 'product_200074292',
        name: '运动控制器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200123871',
        name: ' DT-WS110E无线水质PH值传感器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200329416',
        name: 'P4001智能压力开关',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200053387',
        name: '燃气报警器 CA-181-N 3年 ABS塑料 CA-181-N',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'ittYoWhtomsJedURG',
        name: ' Wi-Fi',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: 'product_200091898',
        name: '智慧能源数字断路器 P',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200007266',
        name: 'LoRa水压变送器 微压量程 1.0级',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200522291',
        name: '苏州卫水cod3010水质在线分析仪',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_300050312',
        name: '卡片式超声波水表',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200529711',
        name: '预警广播一体站 F-YJ100-L',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'solution_700249221',
        name: '小型水库雨水情和安全监测系统解决方案',
        classId: 'solution',
        className: '方案',
        classRGB: '#425B8A'
      },
      {
        id: 'product_200054259',
        name: 'LTE-GPS移动终端',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_900291651',
        name: '1路RS232/485卡轨式以太网串口服务器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200928601',
        name: 'DT-WS110E30无线水质溶解氧传感器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_500281606',
        name: '泵吸式便携丙烷检测报警仪',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200098298',
        name: '智慧用水管理平台',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200720010',
        name: '人流计数控制器 电平信号 4m Modbus',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'icvi7NGkVHpBaWrsE',
        name: '透明度',
        classId: 'zhibiao',
        className: '指标',
        classRGB: 'rgba(132, 112, 168, 1)'
      },
      {
        id: 'product_900272831',
        name: '边缘智慧网关X7128RP NXP 的 ARM Cortex-A7 内核 i.MX6ULL 应用处理器为核心工业高端处理器， 主频 800MHz',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200054570',
        name: '智慧用电安全卫士测控系统 JHDQ-MD3-N 监测范围；三相0- 灰色',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200089827',
        name: 'AMT-FB301多参数水质监测浮标系统',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200054990',
        name: '地下水位测量仪',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200050980',
        name: '用户信息传输装置 灰色 SD-F3CD500',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_100284140',
        name: '倾角传感器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200007870',
        name: '溶解氧传感器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_100216501',
        name: '壁挂式5G工业无线路由器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200015572',
        name: '8口二层百兆网管型带6路串口嵌入式工业以太网交换机',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_100041141',
        name: '水质氨氮传感器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200007360',
        name: 'RS232串口信号隔离保护器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'solution_200061615',
        name: '商超人流分析解决方案',
        classId: 'solution',
        className: '方案',
        classRGB: '#425B8A'
      },
      {
        id: 'ibz0FFtzvho4JPplV',
        name: '温度',
        classId: 'zhibiao',
        className: '指标',
        classRGB: 'rgba(132, 112, 168, 1)'
      },
      {
        id: 'product_200002845',
        name: '8路RS232/485/422光纤复用光端机',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_900050301',
        name: 'NB-Iot物联网水表',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200920108',
        name: 'ble\\zigbee\\4g无线远程测控终端',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200108662',
        name: '高效泵站节电成套设备 5kw',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_700784110',
        name: 'HDP601 标准型 投入式液位变送器 HDP601',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'solution_200056545',
        name: '智慧水库解决方案',
        classId: 'solution',
        className: '方案',
        classRGB: '#425B8A'
      },
      {
        id: 'product_200709516',
        name: '物联网综合管理平台',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200107061',
        name: '外卡式超声波流量计 X3系列',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200791614',
        name: '雷达水位计(带4G模块+BT模块) 70m',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200074217',
        name: 'NB-IoT漏水满水水浸探测报警器 200G ABS塑料 白色',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'solution_200318140',
        name: '二次用水水质监测方案设计',
        classId: 'solution',
        className: '方案',
        classRGB: '#425B8A'
      },
      {
        id: 'product_900331446',
        name: '无线温度传感器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_100090431',
        name: 'LoRa无线远传水表',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200395111',
        name: 'LSH10-1M微型 多普勒流速仪',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_900332231',
        name: 'LY-QX12系列微型环境监测站 LY-QX12M2B(温度、湿度、气压、光照度、噪音、pm2.5、pm10 和气体系列可选系列) NB-IoT',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200074157',
        name: '水压报警器 TSM-01P（BLE） 铸铝 304 不锈钢 2.5KG 灰色',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'irJnEj8lkdblRybtU',
        name: '湿度',
        classId: 'zhibiao',
        className: '指标',
        classRGB: 'rgba(132, 112, 168, 1)'
      },
      {
        id: 'TAG20210414062443000001',
        name: '智慧水务',
        classId: 'lycj',
        className: '领域场景',
        classRGB: '#83A3D7'
      },
      {
        id: 'solution_200126488',
        name: '曼顿科技精细化数智用电',
        classId: 'solution',
        className: '方案',
        classRGB: '#425B8A'
      },
      {
        id: 'product_700012531',
        name: 'NB干式无线阀控智能水表',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_700254801',
        name: '双网口4G工业无线路由器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200909018',
        name: '智能电磁流量计',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200310881',
        name: 'LSH10-1S型超声波多普勒流速仪',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'iRs8IhCm273ZmcF62',
        name: '数字 IO*5',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: 'product_200530101',
        name: 'LDH20-1QC型雷达流速流量仪',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'solution_200758211',
        name: '地下水实现在线监测​方案',
        classId: 'solution',
        className: '方案',
        classRGB: '#425B8A'
      },
      {
        id: 'isbs16qgxLxFMmLZa',
        name: ' RS485',
        classId: 'interface',
        className: '接口',
        classRGB: '#8470A8'
      },
      {
        id: 'solution_200037439',
        name: '基于智慧多功能灯杆的智慧城市',
        classId: 'solution',
        className: '方案',
        classRGB: '#425B8A'
      },
      {
        id: 'solution_200571281',
        name: '物联网水质在线监测系统解决方案',
        classId: 'solution',
        className: '方案',
        classRGB: '#425B8A'
      },
      {
        id: 'solution_200527631',
        name: '污水排放管道流量在线监测系统',
        classId: 'solution',
        className: '方案',
        classRGB: '#425B8A'
      },
      {
        id: 'product_200035039',
        name: 'DC-YL雨量传感器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200979112',
        name: 'F-SY100振弦式渗压计 F-SY100-3',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200320816',
        name: '雷达一体式流量计 F-LL100-30-L',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200074345',
        name: '雷达水位计（喇叭口）',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'product_200074227',
        name: 'NB-IoT漏水满水水浸探测报警器',
        classId: 'product',
        className: '产品',
        classRGB: '#6EA3FD'
      },
      {
        id: 'solution_200091419',
        name: '商业街人流分析系统',
        classId: 'solution',
        className: '方案',
        classRGB: '#425B8A'
      }
    ],
    edges: [
      {
        fromClass: 'product_300062514',
        toClass: 'irJnEj8lkdblRybtU',
        edgeTypeId: 'haveindicators',
        name: '拥有指标',
        rank: 0
      },
      {
        fromClass: 'product_500281606',
        toClass: 'irbk8MUt14dU5WV3q',
        edgeTypeId: 'hasInterface',
        name: '拥有接口',
        rank: 0
      },
      {
        fromClass: 'product_100069761',
        toClass: 'i0PpM7VUmleHAcn10',
        edgeTypeId: 'hasInterface',
        name: '拥有接口',
        rank: 0
      },
      {
        fromClass: 'product_200072729',
        toClass: 'ie93RpFsfonZEpNVA',
        edgeTypeId: 'hasInterface',
        name: '拥有接口',
        rank: 0
      },
      {
        fromClass: 'product_300153021',
        toClass: 'iQAX8Yvz2Y4XaKEZ6',
        edgeTypeId: 'haveindicators',
        name: '拥有指标',
        rank: 0
      },
      {
        fromClass: 'product_900216010',
        toClass: 'iGKYs2lA2JasWMuQb',
        edgeTypeId: 'hasInterface',
        name: '拥有接口',
        rank: 0
      },
      {
        fromClass: 'product_700711208',
        toClass: 'i0KwCMOylrJA8CbbF',
        edgeTypeId: 'haveindicators',
        name: '拥有指标',
        rank: 0
      },
      {
        fromClass: 'product_500339711',
        toClass: 'iPwVbn3F1Rx8EvTJE',
        edgeTypeId: 'haveindicators',
        name: '拥有指标',
        rank: 0
      },
      {
        fromClass: 'product_200015572',
        toClass: 'iKU1xXTx7rwoiiT1m',
        edgeTypeId: 'hasInterface',
        name: '拥有接口',
        rank: 0
      },
      {
        fromClass: 'product_200006477',
        toClass: 'ibz0FFtzvho4JPplV',
        edgeTypeId: 'haveindicators',
        name: '拥有指标',
        rank: 0
      },
      {
        fromClass: 'product_100041141',
        toClass: '100041141_DC_POWER_SUPPLY',
        edgeTypeId: 'powersupply',
        name: '供电方式',
        rank: 0
      },
      {
        fromClass: 'product_500067271',
        toClass: '500067271_AC_POWER_SUPPLY',
        edgeTypeId: 'powersupply',
        name: '供电方式',
        rank: 0
      },
      {
        fromClass: 'product_700784110',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200530101',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200522291',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200509041',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200007870',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'solution_200092486',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu1',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200927031',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'solution_500303102',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu1',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200035039',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'solution_200092092',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu1',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200007268',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_300050312',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200009257',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200005278',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200074345',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200722616',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200121802',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200046552',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_700184188',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200908614',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200074227',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200310881',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200074155',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200991661',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200728312',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_300226781',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_500716102',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200929514',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200979112',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_900272831',
        toClass: 'iRs8IhCm273ZmcF62',
        edgeTypeId: 'hasInterface',
        name: '拥有接口',
        rank: 0
      },
      {
        fromClass: 'product_200911260',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200550101',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200328851',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_900777531',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200111442',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200003702',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200089827',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200321061',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200054990',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_300208011',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200528661',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'solution_200126080',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu1',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200002845',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_900017316',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'solution_200056545',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu1',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'solution_200358311',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu1',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200522421',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200002167',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200529711',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200129311',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200098298',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_300205631',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200053550',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_700030531',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200006528',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'solution_700249221',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu1',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200111426',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200123871',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200088948',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200911664',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200331112',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200791184',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200006411',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_900050301',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200054259',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'solution_200729321',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu1',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200321691',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200505091',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200955161',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200979181',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200727781',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'solution_200126488',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu1',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_100214188',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200050980',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200038787',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200517101',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200720821',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_900291651',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200708100',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200909561',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200050926',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200007276',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200350311',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200191711',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'solution_200758211',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu1',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200150611',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200917118',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200709516',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'solution_200085872',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu1',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200579181',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_100231444',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200003373',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200070159',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200007284',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200791614',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200321684',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200091898',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200525351',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200074157',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200329416',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200120016',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'solution_200777211',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu1',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200922391',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'solution_200118286',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu1',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'solution_200799411',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu1',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200320816',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200779181',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200054570',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200007266',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200009274',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200070119',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_100090431',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200057255',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_500251422',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200094157',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200005773',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200928601',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'solution_200030890',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu1',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200528014',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_300226761',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_100216501',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_700010531',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200093372',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200064944',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_300250301',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200923511',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200074217',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200714126',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_500255521',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_700034106',
        toClass: 'isbs16qgxLxFMmLZa',
        edgeTypeId: 'hasInterface',
        name: '拥有接口',
        rank: 0
      },
      {
        fromClass: 'product_200078824',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200395111',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_700012531',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200311711',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'solution_200037439',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu1',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200973911',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200107061',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200311122',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'solution_200571281',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu1',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200087121',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'solution_200318140',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu1',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200053387',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200920191',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200528818',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200508691',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'solution_200019200',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu1',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200528618',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200007360',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'iQtYDFu3nQh0wkq9Y',
        toClass: 'valve_opening',
        edgeTypeId: 'type2',
        name: '所属类型',
        rank: 0
      },
      {
        fromClass: 'product_200920108',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200522891',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_500377141',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_700254801',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200108662',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200509091',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200014557',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_900223071',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200108688',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_900228701',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'solution_500133104',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu1',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200301901',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200909018',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200354112',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_900331446',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200005270',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_700049281',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200722431',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200708171',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'solution_200527631',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu1',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_100227041',
        toClass: 'TAG20210414062443000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_100285411',
        toClass: 'iA5qXC6uRMjXoSpWY',
        edgeTypeId: 'haveindicators',
        name: '拥有指标',
        rank: 0
      },
      {
        fromClass: 'product_900073146',
        toClass: 'iNdQZh83ksWkDhxIG',
        edgeTypeId: 'hasInterface',
        name: '拥有接口',
        rank: 0
      },
      {
        fromClass: 'product_900332231',
        toClass: 'iQTfObYUnD3AbS738',
        edgeTypeId: 'haveindicators',
        name: '拥有指标',
        rank: 0
      },
      {
        fromClass: 'product_200721280',
        toClass: '200721280_DC_POWER_SUPPLY',
        edgeTypeId: 'powersupply',
        name: '供电方式',
        rank: 0
      },
      {
        fromClass: 'product_100214971',
        toClass: 'iWg6261o5w6aVbij5',
        edgeTypeId: 'hasInterface',
        name: '拥有接口',
        rank: 0
      },
      {
        fromClass: 'solution_200091419',
        toClass: 'TAG20211020004215000001',
        edgeTypeId: 'shuyu1',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_500051381',
        toClass: 'iPoz6FzsQqm6cTjTr',
        edgeTypeId: 'haveindicators',
        name: '拥有指标',
        rank: 0
      },
      {
        fromClass: 'solution_200050769',
        toClass: 'TAG20211020004215000001',
        edgeTypeId: 'shuyu1',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_100284140',
        toClass: '100284140_DC_POWER_SUPPLY',
        edgeTypeId: 'powersupply',
        name: '供电方式',
        rank: 0
      },
      {
        fromClass: 'solution_200073196',
        toClass: 'TAG20211020004215000001',
        edgeTypeId: 'shuyu1',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'solution_200061615',
        toClass: 'TAG20211020004215000001',
        edgeTypeId: 'shuyu1',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200074292',
        toClass: 'TAG20211020004215000001',
        edgeTypeId: 'shuyu',
        name: '属于',
        rank: 0
      },
      {
        fromClass: 'product_200720010',
        toClass: 'iAT9bwcdFqMY56RP1',
        edgeTypeId: 'haveindicators',
        name: '拥有指标',
        rank: 0
      },
      {
        fromClass: 'product_200031537',
        toClass: 'iFR9gBH13i575B0pG',
        edgeTypeId: 'haveindicators',
        name: '拥有指标',
        rank: 0
      },
      {
        fromClass: 'product_200137711',
        toClass: '200137711_DC_POWER_SUPPLY',
        edgeTypeId: 'powersupply',
        name: '供电方式',
        rank: 0
      },
      {
        fromClass: 'product_100332212',
        toClass: 'iLSfDwo9ZsvF9op8v',
        edgeTypeId: 'hasInterface',
        name: '拥有接口',
        rank: 0
      },
      {
        fromClass: 'product_300012820',
        toClass: 'ittYoWhtomsJedURG',
        edgeTypeId: 'hasInterface',
        name: '拥有接口',
        rank: 0
      },
      {
        fromClass: 'product_200087121',
        toClass: 'icvi7NGkVHpBaWrsE',
        edgeTypeId: 'haveindicators',
        name: '拥有指标',
        rank: 0
      }
    ]
  };
};

let data7 = () => {
  return {
    classes: [
      {
        id: 'ixasPzhdK2qJdl5dU',
        name: '疾病',
        rgb: 'rgba(187,192,73,1)',
        level: 0,
        properties: []
      },
      {
        id: 'ig9xam3VlOTigJ5z1',
        name: '其他',
        rgb: 'rgba(184,206,228,1)',
        level: 0,
        properties: []
      },
      {
        id: 'i1cI2BwAzrTcI7YBZ',
        name: '其他治疗',
        rgb: 'rgba(60,127,12,1)',
        level: 0,
        properties: []
      },
      {
        id: 'iS3cgamL2fyeHnqL9',
        name: '手术治疗',
        rgb: 'rgba(3,228,240,1)',
        level: 0,
        properties: []
      },
      {
        id: 'igOZJDLQoqrOkiJB7',
        name: '检查',
        rgb: 'rgba(229,10,156,1)',
        level: 0,
        properties: []
      },
      {
        id: 'i95M6dcZg691WKvzH',
        name: '流行病学',
        rgb: 'rgba(198,136,117,1)',
        level: 0,
        properties: []
      },
      {
        id: 'iYn6eWXbVGjxsZ5u0',
        name: '症状',
        rgb: 'rgba(193,71,156,1)',
        level: 0,
        properties: []
      },
      {
        id: 'iRFi5To5F5bEgQSHH',
        name: '社会学',
        rgb: 'rgba(185,182,151,1)',
        level: 0,
        properties: []
      },
      {
        id: 'iJqxClJM9F1zppA2b',
        name: '药物',
        rgb: 'rgba(225,206,245,1)',
        level: 0,
        properties: []
      },
      {
        id: 'i64lE7TI5Y7YLj1mC',
        name: '部位',
        rgb: 'rgba(221,152,244,1)',
        level: 0,
        properties: []
      },
      {
        id: 'ijB4apXAEGVvmVrtP',
        name: '预后',
        rgb: 'rgba(154,162,23,1)',
        level: 0,
        properties: []
      }
    ],
    edges: [
      {
        id: 'i2JlelvKPCVxkK760',
        name: '预防',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'ig9xam3VlOTigJ5z1'
      },
      {
        id: 'i1omFd7nSstegtzsB',
        name: '阶段',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'ig9xam3VlOTigJ5z1'
      },
      {
        id: 'iP1Fsw422iCw69eQj',
        name: '就诊科室',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'ig9xam3VlOTigJ5z1'
      },
      {
        id: 'io4XABBKVPPOVH4De',
        name: '辅助治疗',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'i1cI2BwAzrTcI7YBZ'
      },
      {
        id: 'iKdwXfO8j2AQxPSUD',
        name: '化疗',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'i1cI2BwAzrTcI7YBZ'
      },
      {
        id: 'i4bBz0H51njH1jhBR',
        name: '放射治疗',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'i1cI2BwAzrTcI7YBZ'
      },
      {
        id: 'it2o5C5ldJNr6Ro3N',
        name: '手术治疗',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'iS3cgamL2fyeHnqL9'
      },
      {
        id: 'if4MlowWvNJdwlkBw',
        name: '实验室检查',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'igOZJDLQoqrOkiJB7'
      },
      {
        id: 'iMxm3dPwHeWzUVND6',
        name: '影像学检查',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'igOZJDLQoqrOkiJB7'
      },
      {
        id: 'iATZDBp736q6cJYnG',
        name: '辅助检查',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'igOZJDLQoqrOkiJB7'
      },
      {
        id: 'iB5Il08Les9ByuWcQ',
        name: '组织学检查',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'igOZJDLQoqrOkiJB7'
      },
      {
        id: 'i3L2XciPfNXmVBRZj',
        name: '内窥镜检查',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'igOZJDLQoqrOkiJB7'
      },
      {
        id: 'inRwCrlkVtJaymzcC',
        name: '筛查',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'igOZJDLQoqrOkiJB7'
      },
      {
        id: 'il8WAqxe1gumguoD7',
        name: '多发群体',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'i95M6dcZg691WKvzH'
      },
      {
        id: 'iNRGVhEccJzUhrF8C',
        name: '发病率',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'i95M6dcZg691WKvzH'
      },
      {
        id: 'iy9t9jWaCKT548OSF',
        name: '发病年龄',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'i95M6dcZg691WKvzH'
      },
      {
        id: 'iYK4ruEj1526OEFFu',
        name: '多发地区',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'i95M6dcZg691WKvzH'
      },
      {
        id: 'i6GloI5US6Q8EL2IN',
        name: '发病性别倾向',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'i95M6dcZg691WKvzH'
      },
      {
        id: 'irWVFE2H7VTCqezhF',
        name: '死亡率',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'i95M6dcZg691WKvzH'
      },
      {
        id: 'iq9rsoF6n71oVT6l2',
        name: '多发季节',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'i95M6dcZg691WKvzH'
      },
      {
        id: 'iQUlIKX2wq8qcAnqZ',
        name: '传播途径',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'i95M6dcZg691WKvzH'
      },
      {
        id: 'iMhbkbD6xo1scBSYW',
        name: '并发症',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'ixasPzhdK2qJdl5dU'
      },
      {
        id: 'iz0NNbEhV4n2I7iJR',
        name: '病理分型',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'ixasPzhdK2qJdl5dU'
      },
      {
        id: 'iq6jqjrKe8TqhCSKp',
        name: '相关（导致）',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'ixasPzhdK2qJdl5dU'
      },
      {
        id: 'iS1746Cx7E3WAvQpR',
        name: '鉴别诊断',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'ixasPzhdK2qJdl5dU'
      },
      {
        id: 'ielyHsFkPGWefYr6e',
        name: '相关（转化）',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'ixasPzhdK2qJdl5dU'
      },
      {
        id: 'ivs2vfuPMKC8FhuKA',
        name: '相关（症状）',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'ixasPzhdK2qJdl5dU'
      },
      {
        id: 'iAFaNFP2QKK6yOAuA',
        name: '临床表现',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'iYn6eWXbVGjxsZ5u0'
      },
      {
        id: 'izwpcdv89bivoed2T',
        name: '治疗后症状',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'iYn6eWXbVGjxsZ5u0'
      },
      {
        id: 'i75yuK4DWbB0y6Wk8',
        name: '侵及周围组织转移的症状',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'iYn6eWXbVGjxsZ5u0'
      },
      {
        id: 'iQwoCamOdoSNRY58P',
        name: '病因',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'iRFi5To5F5bEgQSHH'
      },
      {
        id: 'iQFxQPJJ9ZnzdHnL3',
        name: '高危因素',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'iRFi5To5F5bEgQSHH'
      },
      {
        id: 'iL8YuGz7YibmRxKHj',
        name: '风险评估因素',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'iRFi5To5F5bEgQSHH'
      },
      {
        id: 'iuccWWT1JEoSgqrF6',
        name: '病史',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'iRFi5To5F5bEgQSHH'
      },
      {
        id: 'iGHSIzNN3Oq1rRtcj',
        name: '遗传因素',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'iRFi5To5F5bEgQSHH'
      },
      {
        id: 'il5r0HZUuceLGWdXq',
        name: '发病机制',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'iRFi5To5F5bEgQSHH'
      },
      {
        id: 'ioh4jeekVVxN4OEIP',
        name: '病理生理',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'iRFi5To5F5bEgQSHH'
      },
      {
        id: 'io4L1C7iBznxPfF2W',
        name: '药物治疗',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'iJqxClJM9F1zppA2b'
      },
      {
        id: 'iWzbXDUTOQxeoRmoY',
        name: '发病部位',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'i64lE7TI5Y7YLj1mC'
      },
      {
        id: 'iUjg5XvhA2G8Hf1T1',
        name: '转移部位',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'i64lE7TI5Y7YLj1mC'
      },
      {
        id: 'icwrybsBwOCIIzDFV',
        name: '外侵部位',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'i64lE7TI5Y7YLj1mC'
      },
      {
        id: 'iKdmN6zd73e1PLel1',
        name: '预后状况',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'ijB4apXAEGVvmVrtP'
      },
      {
        id: 'iwhd7mFCFYtf2Wq3a',
        name: '预后生存率',
        fromClass: 'ixasPzhdK2qJdl5dU',
        toClass: 'ijB4apXAEGVvmVrtP'
      }
    ]
  };
};

let data8 = () => {
  return {
    classes: [
      {
        id: 'solution',
        name: '方案',
        level: 0,
        properties: ['spuId', '名称'],
        typeSelect: true,
        style: {
          fill: 'rgb(22, 23, 27)'
        },
        labelCfg: {
          style: {
            fill: '#fff'
          }
        }
      },
      {
        id: 'system',
        name: '系统',
        rgb: '#5CC2BB',
        level: 0,
        properties: ['名称'],
        typeSelect: true
      },
      {
        id: 'system_category',
        name: '系统分类',
        rgb: '#5BBDE0',
        level: 0,
        properties: [],
        typeSelect: true
      },
      {
        id: 'product',
        name: '产品',
        rgb: '#5CC2BB',
        level: 0,
        properties: ['spuId', '名称'],
        typeSelect: true
      },
      {
        id: 'field',
        name: '领域',
        rgb: '#5CC2BB',
        level: 0,
        properties: ['名称'],
        typeSelect: true
      },
      {
        id: 'company',
        name: '企业',
        rgb: '#F2A33A',
        level: 0,
        properties: ['名称'],
        typeSelect: true
      },
      {
        id: 'interface',
        name: '接口',
        rgb: '#5122D6',
        level: 0,
        properties: ['名称'],
        typeSelect: true
      },
      {
        id: 'policy',
        name: '政策',
        rgb: '#DF8C4F',
        level: 0,
        properties: [],
        typeSelect: true
      },
      {
        id: 'place',
        name: '场所',
        rgb: '#985FF6',
        level: 0,
        properties: ['名称'],
        typeSelect: true
      },
      {
        id: 'metric',
        name: '指标',
        rgb: '#EA5644',
        level: 0,
        properties: ['名称'],
        typeSelect: true
      },
      {
        id: 'metric_category',
        name: '指标分类',
        rgb: '#687AF7',
        level: 0,
        properties: [],
        typeSelect: true
      },
      {
        id: 'solution_category',
        name: '方案分类',
        rgb: '#687AF7',
        level: 0,
        properties: [],
        typeSelect: true
      },
      {
        id: 'interface_category',
        name: '技术分类',
        rgb: '#48C672',
        level: 0,
        properties: [],
        typeSelect: true
      },
      {
        id: 'power_suply',
        name: '供电方式',
        rgb: '#EA5644',
        level: 0,
        properties: [],
        typeSelect: true
      },
      {
        id: 'product_category',
        name: '产品类型',
        rgb: '#985FF6',
        level: 0,
        properties: ['名称'],
        typeSelect: true
      },
      {
        id: 'technology',
        name: '技术',
        rgb: '#EA5644',
        level: 0,
        properties: ['名称'],
        typeSelect: true
      },
      {
        id: 'example',
        name: '案例',
        rgb: '#0051DC',
        level: 0,
        properties: ['名称'],
        typeSelect: true
      },
      {
        id: 'shadowNodesolutionspuId',
        name: 'spuId',
        typeSelect: true,
        _isShadow: true,
        _data: {
          id: 'solution',
          name: '方案',
          rgb: '#EE8163',
          level: 0,
          properties: ['spuId', '名称'],
          typeSelect: true
        },
        _dataId: 'solution'
      },
      {
        id: 'shadowNodesolution名称',
        name: '名称',
        typeSelect: true,
        _isShadow: true,
        _data: {
          id: 'solution',
          name: '方案',
          rgb: '#EE8163',
          level: 0,
          properties: ['spuId', '名称'],
          typeSelect: true
        },
        _dataId: 'solution'
      },
      {
        id: 'shadowNodesystem名称',
        name: '名称',
        typeSelect: true,
        _isShadow: true,
        _data: {
          id: 'system',
          name: '系统',
          rgb: '#5CC2BB',
          level: 0,
          properties: ['名称'],
          typeSelect: true
        },
        _dataId: 'system'
      },
      {
        id: 'shadowNodeproductspuId',
        name: 'spuId',
        typeSelect: true,
        _isShadow: true,
        _data: {
          id: 'product',
          name: '产品',
          rgb: '#5CC2BB',
          level: 0,
          properties: ['spuId', '名称'],
          typeSelect: true
        },
        _dataId: 'product'
      },
      {
        id: 'shadowNodeproduct名称',
        name: '名称',
        typeSelect: true,
        _isShadow: true,
        _data: {
          id: 'product',
          name: '产品',
          rgb: '#5CC2BB',
          level: 0,
          properties: ['spuId', '名称'],
          typeSelect: true
        },
        _dataId: 'product'
      },
      {
        id: 'shadowNodefield名称',
        name: '名称',
        typeSelect: true,
        _isShadow: true,
        _data: {
          id: 'field',
          name: '领域',
          rgb: '#5CC2BB',
          level: 0,
          properties: ['名称'],
          typeSelect: true
        },
        _dataId: 'field'
      },
      {
        id: 'shadowNodecompany名称',
        name: '名称',
        typeSelect: true,
        _isShadow: true,
        _data: {
          id: 'company',
          name: '企业',
          rgb: '#F2A33A',
          level: 0,
          properties: ['名称'],
          typeSelect: true
        },
        _dataId: 'company'
      },
      {
        id: 'shadowNodeinterface名称',
        name: '名称',
        typeSelect: true,
        _isShadow: true,
        _data: {
          id: 'interface',
          name: '接口',
          rgb: '#5122D6',
          level: 0,
          properties: ['名称'],
          typeSelect: true
        },
        _dataId: 'interface'
      },
      {
        id: 'shadowNodeplace名称',
        name: '名称',
        typeSelect: true,
        _isShadow: true,
        _data: {
          id: 'place',
          name: '场所',
          rgb: '#985FF6',
          level: 0,
          properties: ['名称'],
          typeSelect: true
        },
        _dataId: 'place'
      },
      {
        id: 'shadowNodemetric名称',
        name: '名称',
        typeSelect: true,
        _isShadow: true,
        _data: {
          id: 'metric',
          name: '指标',
          rgb: '#EA5644',
          level: 0,
          properties: ['名称'],
          typeSelect: true
        },
        _dataId: 'metric'
      },
      {
        id: 'shadowNodeproduct_category名称',
        name: '名称',
        typeSelect: true,
        _isShadow: true,
        _data: {
          id: 'product_category',
          name: '产品类型',
          rgb: '#985FF6',
          level: 0,
          properties: ['名称'],
          typeSelect: true
        },
        _dataId: 'product_category'
      },
      {
        id: 'shadowNodetechnology名称',
        name: '名称',
        typeSelect: true,
        _isShadow: true,
        _data: {
          id: 'technology',
          name: '技术',
          rgb: '#EA5644',
          level: 0,
          properties: ['名称'],
          typeSelect: true
        },
        _dataId: 'technology'
      },
      {
        id: 'shadowNodeexample名称',
        name: '名称',
        typeSelect: true,
        _isShadow: true,
        _data: {
          id: 'example',
          name: '案例',
          rgb: '#0051DC',
          level: 0,
          properties: ['名称'],
          typeSelect: true
        },
        _dataId: 'example'
      }
    ],
    edges: [
      {
        id: 'metric_sub_class',
        name: '有子类',
        fromClass: 'metric_category',
        toClass: 'metric_category',
        source: 'metric_category',
        target: 'metric_category'
      },
      {
        id: 'field_policy',
        name: '领域政策',
        fromClass: 'field',
        toClass: 'policy',
        source: 'field',
        target: 'policy'
      },
      {
        id: 'system_place',
        name: '系统场所',
        fromClass: 'system',
        toClass: 'place',
        source: 'system',
        target: 'place'
      },
      {
        id: 'system_technology',
        name: '系统技术',
        fromClass: 'system',
        toClass: 'technology',
        source: 'system',
        target: 'technology'
      },
      {
        id: 'solution_example',
        name: '方案案例',
        fromClass: 'solution',
        toClass: 'example',
        source: 'solution',
        target: 'example'
      },
      {
        id: 'company_example',
        name: '企业案例',
        fromClass: 'company',
        toClass: 'example',
        source: 'company',
        target: 'example'
      },
      {
        id: 'example_field',
        name: '案例领域',
        fromClass: 'example',
        toClass: 'field',
        source: 'example',
        target: 'field'
      },
      {
        id: 'sub_solution_category',
        name: '子分类',
        fromClass: 'solution_category',
        toClass: 'solution_category',
        source: 'solution_category',
        target: 'solution_category'
      },
      {
        id: 'sub_system_category',
        name: '子分类',
        fromClass: 'system_category',
        toClass: 'system_category',
        source: 'system_category',
        target: 'system_category'
      },
      {
        id: 'sub_product_category',
        name: '子分类',
        fromClass: 'product_category',
        toClass: 'product_category',
        source: 'product_category',
        target: 'product_category'
      },
      {
        id: 'have_solution',
        name: '有方案',
        fromClass: 'solution_category',
        toClass: 'solution',
        source: 'solution_category',
        target: 'solution'
      },
      {
        id: 'have_system',
        name: '有系统',
        fromClass: 'system_category',
        toClass: 'system',
        source: 'system_category',
        target: 'system'
      },
      {
        id: 'have_product',
        name: '有产品',
        fromClass: 'product_category',
        toClass: 'product',
        source: 'product_category',
        target: 'product'
      },
      {
        id: 'include_system',
        name: '包含系统',
        fromClass: 'solution',
        toClass: 'system',
        source: 'solution',
        target: 'system'
      },
      {
        id: 'include_product',
        name: '包含产品',
        fromClass: 'system',
        toClass: 'product',
        source: 'system',
        target: 'product'
      },
      {
        id: 'belong_to_field',
        name: '属于领域',
        fromClass: 'solution',
        toClass: 'field',
        source: 'solution',
        target: 'field'
      },
      {
        id: 'company_field',
        name: '企业领域',
        fromClass: 'company',
        toClass: 'field',
        source: 'company',
        target: 'field'
      },
      {
        id: 'company_solution',
        name: '企业方案',
        fromClass: 'company',
        toClass: 'solution',
        source: 'company',
        target: 'solution'
      },
      {
        id: 'company_product',
        name: '企业产品',
        fromClass: 'company',
        toClass: 'product',
        source: 'company',
        target: 'product'
      },
      {
        id: 'compliance_policy',
        name: '符合政策',
        fromClass: 'solution',
        toClass: 'policy',
        source: 'solution',
        target: 'policy'
      },
      {
        id: 'work_on',
        name: '适用场所',
        fromClass: 'solution',
        toClass: 'place',
        source: 'solution',
        target: 'place'
      },
      {
        id: 'common_product',
        name: '常用设备',
        fromClass: 'product',
        toClass: 'place',
        source: 'product',
        target: 'place'
      },
      {
        id: 'have_interface',
        name: '拥有接口',
        fromClass: 'product',
        toClass: 'interface',
        source: 'product',
        target: 'interface'
      },
      {
        id: 'have_metric',
        name: '拥有指标',
        fromClass: 'product',
        toClass: 'metric',
        source: 'product',
        target: 'metric'
      },
      {
        id: 'to_interface',
        name: '有接口',
        fromClass: 'interface_category',
        toClass: 'interface',
        source: 'interface_category',
        target: 'interface'
      },
      {
        id: 'to_metric',
        name: '有指标',
        fromClass: 'metric_category',
        toClass: 'metric',
        source: 'metric_category',
        target: 'metric'
      },
      {
        id: 'interface_sub_class',
        name: '子分类',
        fromClass: 'interface_category',
        toClass: 'interface_category',
        source: 'interface_category',
        target: 'interface_category'
      },
      {
        id: 'sub_field',
        name: '子领域',
        fromClass: 'field',
        toClass: 'field',
        source: 'field',
        target: 'field'
      },
      {
        id: 'has_power_suply',
        name: '有供电方式',
        fromClass: 'product',
        toClass: 'power_suply',
        source: 'product',
        target: 'power_suply'
      },
      {
        id: 'solution_use_product',
        name: '引用产品',
        fromClass: 'solution',
        toClass: 'product',
        source: 'solution',
        target: 'product'
      },
      {
        id: 'shadowLinksolutionspuId',
        source: 'solution',
        target: 'shadowNodesolutionspuId',
        fromClass: 'solution',
        toClass: 'shadowNodesolutionspuId',
        _isShadow: true,
        _data: {
          id: 'solution',
          name: '方案',
          rgb: '#EE8163',
          level: 0,
          properties: ['spuId', '名称'],
          typeSelect: true
        },
        _dataId: 'solution'
      },
      {
        id: 'shadowLinksolution名称',
        source: 'solution',
        target: 'shadowNodesolution名称',
        fromClass: 'solution',
        toClass: 'shadowNodesolution名称',
        _isShadow: true,
        _data: {
          id: 'solution',
          name: '方案',
          rgb: '#EE8163',
          level: 0,
          properties: ['spuId', '名称'],
          typeSelect: true
        },
        _dataId: 'solution'
      },
      {
        id: 'shadowLinksystem名称',
        source: 'system',
        target: 'shadowNodesystem名称',
        fromClass: 'system',
        toClass: 'shadowNodesystem名称',
        _isShadow: true,
        _data: {
          id: 'system',
          name: '系统',
          rgb: '#5CC2BB',
          level: 0,
          properties: ['名称'],
          typeSelect: true
        },
        _dataId: 'system'
      },
      {
        id: 'shadowLinkproductspuId',
        source: 'product',
        target: 'shadowNodeproductspuId',
        fromClass: 'product',
        toClass: 'shadowNodeproductspuId',
        _isShadow: true,
        _data: {
          id: 'product',
          name: '产品',
          rgb: '#5CC2BB',
          level: 0,
          properties: ['spuId', '名称'],
          typeSelect: true
        },
        _dataId: 'product'
      },
      {
        id: 'shadowLinkproduct名称',
        source: 'product',
        target: 'shadowNodeproduct名称',
        fromClass: 'product',
        toClass: 'shadowNodeproduct名称',
        _isShadow: true,
        _data: {
          id: 'product',
          name: '产品',
          rgb: '#5CC2BB',
          level: 0,
          properties: ['spuId', '名称'],
          typeSelect: true
        },
        _dataId: 'product'
      },
      {
        id: 'shadowLinkfield名称',
        source: 'field',
        target: 'shadowNodefield名称',
        fromClass: 'field',
        toClass: 'shadowNodefield名称',
        _isShadow: true,
        _data: {
          id: 'field',
          name: '领域',
          rgb: '#5CC2BB',
          level: 0,
          properties: ['名称'],
          typeSelect: true
        },
        _dataId: 'field'
      },
      {
        id: 'shadowLinkcompany名称',
        source: 'company',
        target: 'shadowNodecompany名称',
        fromClass: 'company',
        toClass: 'shadowNodecompany名称',
        _isShadow: true,
        _data: {
          id: 'company',
          name: '企业',
          rgb: '#F2A33A',
          level: 0,
          properties: ['名称'],
          typeSelect: true
        },
        _dataId: 'company'
      },
      {
        id: 'shadowLinkinterface名称',
        source: 'interface',
        target: 'shadowNodeinterface名称',
        fromClass: 'interface',
        toClass: 'shadowNodeinterface名称',
        _isShadow: true,
        _data: {
          id: 'interface',
          name: '接口',
          rgb: '#5122D6',
          level: 0,
          properties: ['名称'],
          typeSelect: true
        },
        _dataId: 'interface'
      },
      {
        id: 'shadowLinkplace名称',
        source: 'place',
        target: 'shadowNodeplace名称',
        fromClass: 'place',
        toClass: 'shadowNodeplace名称',
        _isShadow: true,
        _data: {
          id: 'place',
          name: '场所',
          rgb: '#985FF6',
          level: 0,
          properties: ['名称'],
          typeSelect: true
        },
        _dataId: 'place'
      },
      {
        id: 'shadowLinkmetric名称',
        source: 'metric',
        target: 'shadowNodemetric名称',
        fromClass: 'metric',
        toClass: 'shadowNodemetric名称',
        _isShadow: true,
        _data: {
          id: 'metric',
          name: '指标',
          rgb: '#EA5644',
          level: 0,
          properties: ['名称'],
          typeSelect: true
        },
        _dataId: 'metric'
      },
      {
        id: 'shadowLinkproduct_category名称',
        source: 'product_category',
        target: 'shadowNodeproduct_category名称',
        fromClass: 'product_category',
        toClass: 'shadowNodeproduct_category名称',
        _isShadow: true,
        _data: {
          id: 'product_category',
          name: '产品类型',
          rgb: '#985FF6',
          level: 0,
          properties: ['名称'],
          typeSelect: true
        },
        _dataId: 'product_category'
      },
      {
        id: 'shadowLinktechnology名称',
        source: 'technology',
        target: 'shadowNodetechnology名称',
        fromClass: 'technology',
        toClass: 'shadowNodetechnology名称',
        _isShadow: true,
        _data: {
          id: 'technology',
          name: '技术',
          rgb: '#EA5644',
          level: 0,
          properties: ['名称'],
          typeSelect: true
        },
        _dataId: 'technology'
      },
      {
        id: 'shadowLinkexample名称',
        source: 'example',
        target: 'shadowNodeexample名称',
        fromClass: 'example',
        toClass: 'shadowNodeexample名称',
        _isShadow: true,
        _data: {
          id: 'example',
          name: '案例',
          rgb: '#0051DC',
          level: 0,
          properties: ['名称'],
          typeSelect: true
        },
        _dataId: 'example'
      }
    ]
  };
};
export default {
  data1,
  data2,
  data3,
  data4,
  data5,
  data6,
  data7,
  data8
};
