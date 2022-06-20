const controls = disabled
    ? [
        {
          label: '类型',
          uiType: 'cascader-select',
          name: 'type',
          props: {
            placeholder: '请选择',
            dataSource: typeList,
            disabled,
          },
        },
        {
          label: '标题',
          uiType: 'text',
          name: 'title',
        },
        {
          label: '描述',
          name: 'description',
          uiType: 'text',
          visibleOn: () => {
            return timing;
          },
        },
        {
          label: '图片',
          name: 'coverUrl',
          uiType: 'upload-img',
          props: {
            appCode: 'yxgl',
            maxCount: 1,
            disabled: true,
          },
        },
        {
          label: '持续时间',
          name: 'duration',
          uiType: 'duration',
          props: {
            tips: '小时',
            disabled: true,
          },
        },
        {
          uiType: 'scope',
          name: 'scope',
          label: '处理人',
          props: {
            disabled: true,
          },
        },
        {
          name: 'hsId',
          uiType: 'hsId',
          disabled,
          label: '推荐话术',
          props: {
            disabled: true,
          },
          visibleOn: () => {
            return !timing;
          },
        },
      ]
    : [
        {
          label: '类型',
          uiType: 'cascader-select',
          name: 'type',
          props: {
            placeholder: '请选择',
            dataSource: typeList,
          },
          rules: [{ required: true, message: '请选择类型' }],
        },
        {
          label: '标题',
          uiType: 'input',
          name: 'title',
          props: {
            placeholder: '请输入标题',
          },
          rules: [{ required: true, message: '请输入标题' }],
        },
        {
          label: '描述',
          name: 'description',
          uiType: 'textarea',
          visibleOn: () => {
            return timing;
          },
        },
        {
          label: '图片',
          name: 'coverUrl',
          uiType: 'upload-img',
          props: {
            appCode: 'yxgl',
            maxCount: 1,
          },
        },
        {
          label: '持续时间',
          name: 'duration',
          uiType: 'duration',
          props: {
            tips: '小时',
          },
        },
        {
          uiType: 'scope',
          name: 'scope',
          label: '处理人',
          rules: [{ required: true, message: '请选择处理人' }],
        },
        {
          name: 'hsId',
          uiType: 'hsId',
          label: '推荐话术',
          // props: {},
          visibleOn: () => {
            return !timing;
          },
        },
      ];