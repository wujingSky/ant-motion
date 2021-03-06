const component = require('./index');
const templateStr = require('!raw!./index.text');
const less = require('!raw!./index.less');
const style = require('../../utils-style');

const bgStyle = style.bgStyleData;
const borderStyle = style.borderStyleData;
const textStyle = style.textStyleData;

export default {
  component,
  templateStr,
  less,
  dataSource: {
    content7: {
      style: {
        height: {
          value: '100vh',
          name: '区块高度',
        },
        ...bgStyle(),
        ...borderStyle(),
      },
    },
    content7_textWrapper: {
      style: {
        width: {
          value: '35%',
          name: '区块宽度',
        },
        top: {
          value: '15%',
          name: '顶部距离',
        },
        left: {
          value: '5%',
          name: '左边距离',
        },
      },
    },
    content7_title: {
      style: {
        ...textStyle({
          size: '32px',
          color: '#404040',
          lineHeight: '48px',
        }),
      },
      children: {
        value: '蚂蚁金融云提供专业的服务',
        name: '标题文字',
      },
    },
    content7_content: {
      style: {
        ...textStyle({
          lineHeight: '24px',
        }),
      },
      children: {
        value: '基于阿里云计算强大的基础资源',
        name: '详细说明',
      },
    },
    content7_img: {
      style: {
        width: {
          value: '50%',
          name: '图片宽度',
        },
        top: {
          value: '15%',
          name: '顶部距离',
        },
        right: {
          value: '5%',
          name: '左边距离',
        },
      },
      children: {
        value: 'https://zos.alipayobjects.com/rmsportal/VHGOVdYyBwuyqCx.png',
        name: '图片地址',
      },
    },
    content7_block0: {
      style: {
        margin: {
          value: '8% 0 0',
          length: 4,
          name: 'margin',
        },
      },
      children: {
        img: {
          name: '图片区块',
          style: {
            width: {
              value: '30px',
              name: '图片宽度',
            },
            height: {
              value: '30px',
              name: '图片高度',
            },
          },
          children: {
            value: 'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
            name: '图片地址',
          },
        },
        title: {
          name: '区块标题',
          style: {
            ...textStyle({
              color: '#3e3e3e',
              size: '14px',
            }),
            margin: {
              value: '0 0 10px 45px',
              name: 'margin',
              length: 4,
            },
          },
          children: {
            value: '技术',
            name: '标题文字',
          },
        },
        content: {
          name: '区块内容',
          style: {
            ...textStyle(),
            margin: {
              value: '0 0 0 45px',
              name: 'margin',
              length: 4,
            },
          },
          children: {
            name: '详细说明',
            value: '丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。',
          },
        },
      },
    },
    content7_block1: {
      style: {
        margin: {
          value: '8% 0 0',
          length: 4,
          name: 'margin',
        },
      },
      children: {
        img: {
          name: '图片区块',
          style: {
            width: {
              value: '30px',
              name: '图片宽度',
            },
            height: {
              value: '30px',
              name: '图片高度',
            },
          },
          children: {
            value: 'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
            name: '图片地址',
          },
        },
        title: {
          name: '区块标题',
          style: {
            ...textStyle({
              color: '#3e3e3e',
              size: '14px',
            }),
            margin: {
              value: '0 0 10px 45px',
              name: 'margin',
              length: 4,
            },
          },
          children: {
            value: '融合',
            name: '标题文字',
          },
        },
        content: {
          name: '区块内容',
          style: {
            ...textStyle(),
            margin: {
              value: '0 0 0 45px',
              name: 'margin',
              length: 4,
            },
          },
          children: {
            name: '详细说明',
            value: '解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。\n解放业务及技术生产力，推动金融服务底层创新。',
          },
        },
      },
    },
    content7_block2: {
      style: {
        margin: {
          value: '8% 0 0',
          length: 4,
          name: 'margin',
        },
      },
      children: {
        img: {
          name: '图片区块',
          style: {
            width: {
              value: '30px',
              name: '图片宽度',
            },
            height: {
              value: '30px',
              name: '图片高度',
            },
          },
          children: {
            value: 'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
            name: '图片地址',
          },
        },
        title: {
          name: '区块标题',
          style: {
            ...textStyle({
              color: '#3e3e3e',
              size: '14px',
            }),
            margin: {
              value: '0 0 10px 45px',
              name: 'margin',
              length: 4,
            },
          },
          children: {
            value: '开发',
            name: '标题文字',
          },
        },
        content: {
          name: '区块内容',
          style: {
            ...textStyle(),
            margin: {
              value: '0 0 0 45px',
              name: 'margin',
              length: 4,
            },
          },
          children: {
            name: '详细说明',
            value: '符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。',
          },
        },
      },
    },
  },
};
