export const __detailConfig = [
  {
    type: 'form',
    title: '案件信息',
    typeConfig: {
      layout: 'L4',
      cols: 3,
      space: 24,
    },
    dataConfig: [
      { type: 'text', id: 'claimReportNo', label: '报案号', path: 'data.source.claimReportNo' },
      { type: 'text', id: 'status', label: '案件状态', path: 'data.source.status', render: (text) => ({ '0': '已报案', '1': '已结案', '2': '不予受理', '3': '已受理', '4': '已销案' }[text]) },
      { type: 'text', id: 'rejectReason', label: '拒赔原因', path: 'data.source.rejectReason' },
      { type: 'text', id: 'claimCancelReason', label: '撤销报案原因', path: 'data.source.claimCancelReason' },
      { type: 'text', id: 'outBizNo', label: '业务单号', path: 'data.source.outBizNo' },
      { type: 'text', id: 'comName', label: '保险机构名称', path: 'data.source.comName' },
      { type: 'text', id: 'accidentDesc', label: '出险描述', path: 'data.source.accidentDesc' },
      { type: 'text', id: 'accidentAddress', label: '出险地点', path: 'data.source.accidentAddress' },
      { type: 'text', id: 'claimApplyAmount', label: '索赔金额', path: 'data.source.claimApplyAmount' },
    ]
  },
  {
    type: 'table',
    title: '报案人信息',
    typeConfig: {
      total: false,
      tableApi: {
        pagination: false,
      }
    },
    dataConfig: [
      { id: 'claimerUid', label: '报案人账号', type: 'text' },
      { id: 'claimerCertName', label: '报案人证件名称', type: 'text' },
      { id: 'claimerCertNo', label: '报案人证件号码', type: 'text' },
      { id: 'claimerPhone', label: '报案人电话号码', type: 'text' },
    ],
    path: 'data.source.claimerData',
  },
  {
    type: 'table',
    title: '关联保单',
    typeConfig: {
      total: true,
      tableApi: {
        pagination: false,
      }
    },
    dataConfig: [
      { type: 'text', label: '保单号', id: 'plicyNo' },
      { type: 'text', label: '被保人', id: 'plicyPerson' },
      { type: 'text', label: '被保人身份证号码', id: 'plicyCardNo' },
      { type: 'text', label: '赔付金额', id: 'plicyAmount', total: true },
      { type: 'text', label: '被保人联系电话', id: 'plicyPhone' },
      { type: 'text', label: '被保人联系地址', id: 'plicyAddress' },
    ],
    path: 'data.source.policyList',
  },
  {
    type: 'form',
    title: '关联赔案',
    typeConfig: {
      layout: 'L4',
      cols: 3,
      space: 24,
    },
    dataConfig: [

    ]
  },
  {
    type: 'form',
    title: '案件处理历史',
    typeConfig: {
      layout: 'L4',
      cols: 3,
      space: 24,
    },
    dataConfig: [

    ]
  },
  {
    type: 'form',
    title: '关键时间节点',
    typeConfig: {
      layout: 'L4',
      cols: 3,
      space: 24,
    },
    dataConfig: [

    ]
  },
];

export const __detailDataSource = {
  data: {
    source: {
      claimReportNo: '201804271100300606540500133526',
      status: '0',
      rejectReason: '',
      claimCancelReason: '',
      outBizNo: '1524819493078-8009-30.55.56.232-1220122576',
      comName: '人保财险',
      accidentDesc: '',
      accidentAddress: '',
      claimApplyAmount: '0.01',
      claimerData: [
        {
          claimerUid: '2088102011188220',
          claimerCertName: '受理测试',
          claimerCertNo: '330106152365412302',
          claimerPhone: '13500000000',
        },
        {
          claimerUid: '2088102011188220',
          claimerCertName: '受理测试',
          claimerCertNo: '330106152365412302',
          claimerPhone: '13500000000',
        },
      ],
      policyList: [
        {
          plicyNo: 'SF78199DF30SDFDF2F',
          plicyPerson: '赵某某',
          plicyCardNo: '5102832938128328272',
          plicyPhone: '13000000000',
          plicyAddress: '四川省成都市',
          plicyAmount: '22',
        },
        {
          plicyNo: 'SF78199DF30SDFDF2F',
          plicyPerson: '赵某某',
          plicyCardNo: '5102832938128328272',
          plicyPhone: '13000000000',
          plicyAmount: '12',
          plicyAddress: '四川省成都市',
        },
        {
          plicyNo: 'SF78199DF30SDFDF2F',
          plicyPerson: '赵某某',
          plicyCardNo: '5102832938128328272',
          plicyPhone: '13000000000',
          plicyAmount: '10',
          plicyAddress: '四川省成都市',
        },
      ]
    }
  },
  success: true,
}
