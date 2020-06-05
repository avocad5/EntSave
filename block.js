//EntSave는 entblock 2.1과 매그넷블록을 참고해서 만들었습니다.
//따라서 GPL 3.0 라이센스를 따릅니다.
const savecolor = '#00CC66';
const getcolor = '#5F3900';

const blocks = [
    {
        name: 'text_introduce',
        template: '%1',
        skeleton: 'basic_text',
        color: {
            default: EntryStatic.colorSet.common.TRANSPARENT,
            darken: EntryStatic.colorSet.common.TRANSPARENT
        },
        params: [
            {
                type: 'Text',
                text: 'EntSave\n차원이다른 저장을 경험해보세요',
                color: EntryStatic.colorSet.common.TEXT,
                align: 'center'
            }
        ],
        def: [],
        map: {},
        class: 'text'
    },
    {
        name: 'savetext',
        template: '%1',
        skeleton: 'basic_text',
        color: {
            default: EntryStatic.colorSet.common.TRANSPARENT,
            darken: EntryStatic.colorSet.common.TRANSPARENT
        },
        params: [
            {
                type: 'Text',
                text: '저장하기',
                color: EntryStatic.colorSet.common.TEXT,
                class: 'bold',
                align: 'center'
            }
        ],
        def: [],
        map: {},
        class: 'save'
    },
    {
      name: 'saveitem',
      template: "%1 : %2 를 사용자의컴퓨터에 저장하기%3",
      skeleton: "basic",
      color: {
        default: savecolor
      },
      params: [
        {
          type: "Block",
          accept: "string",
          value: "안녕"
        },
        {
          type: "Block",
          accept: "string",
          value: "엔트리"
        },
        {
          type: 'Indicator',
          img: 'block_icon/hardware_icon.svg',
          size: 11,
        }
      ],
      def: [],
      map: {
        KEY:0,
        VALUE:1
      },
      class: "save",
      func: async(sprite, script) => {
        let keydd = script.getValue("KEY", script);
        let valuedd = script.getValue("VALUE", script);

        localStorage.setItem(Entry.projectId+keydd,valuedd);
      }
    },
    {
      name: 'removeitem',
      template: "%1key와 value를 삭제하기%2",
      skeleton: "basic",
      color: {
        default: savecolor
      },
      params: [
        {
          type: "Block",
          accept: "string",
          value: "안녕"
        },
        {
          type: 'Indicator',
          img: 'block_icon/hardware_icon.svg',
          size: 11,
        }
      ],
      def: [],
      map: {
        KEY:0
      },
      class: "save",
      func: async(sprite, script) => {
        let keydd = script.getValue("KEY", script);

        localStorage.removeItem(Entry.projectId+keydd);
      }
    },
    {
      name: 'clear',
      template: "모든 key와 value 삭제하기%1",
      skeleton: "basic",
      color: {
        default: savecolor
      },
      params: [
        {
          type: 'Indicator',
          img: 'block_icon/hardware_icon.svg',
          size: 11,
        }
      ],
      def: [],
      map: {
      },
      class: "save",
      func: async(sprite, script) => {

        localStorage.clear();
      }
    },

    //배열 카테고리
    {
        name: 'gettext',
        template: '%1',
        skeleton: 'basic_text',
        color: {
            default: EntryStatic.colorSet.common.TRANSPARENT,
            darken: EntryStatic.colorSet.common.TRANSPARENT
        },
        params: [
            {
                type: 'Text',
                text: '가져오기',
                color: EntryStatic.colorSet.common.TEXT,
                align: 'center'
            }
        ],
        def: [],
        map: {},
        class: 'get'
    },

    {
      name: "getvalue",
      template: "%1key를 가진 value값",
      skeleton: "basic_string_field",
      color: {
        default: getcolor
      },
      params: [
        {
          type: "Block",
          accept: "string",
          value: "안녕"
        }
      ],
      def: [],
      map: {
        KEY:0
      },
      class: "get",
      func: async(sprite, script) => {
        let keydd = script.getValue("KEY", script);
        
        return localStorage.getItem(Entry.projectId+keydd);
      }
    }
]

LibraryCreator.start(blocks, 'API', 'ES')
console.log("EntSave설치가 완료되었습니다!\nEntSave를 활용해서 멋진작품을 만들어보세요 :)")
