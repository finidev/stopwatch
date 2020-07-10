import { Stopwatch } from '../../index.js'

export const components = {
  Stopwatch,
}

export const config = {
  logo: './logo.png',
  displayName: 'Stopwatch',
  name: 'stopwatch',
  version: '1.0.0',
  components: [
    {
      name: 'Stopwatch',
      displayName: 'Stopwatch',
      icon: './icon.png',
      defaultWidth: 375,
      defaultHeight: 100,
      props: [
        {
          name: 'timeColor',
          displayName: 'Time Color',
          type: 'color',
          default: '@text',
        },
        {
          name: 'fontSize',
          displayName: 'Font Size',
          type: 'number',
          default: 30,
        },
        {
          name: 'iconFullWidth',
          displayName: 'Spread Icons to the Full Width?',
          type: 'boolean',
          default: false,
        },
        {
          name: 'showMsec',
          displayName: 'Show Milliseconds?',
          type: 'boolean',
          default: true,
        },
      ],
      childComponents: [
        {
          name: 'startButton',
          displayName: 'Start Button',
          props: [
            {
              name: 'iconName',
              displayName: 'Icon',
              type: 'icon',
              default: 'play-arrow',
            },
            {
              name: 'color',
              displayName: 'Icon Color',
              type: 'color',
              default: '#757575',
            },
            {
              name: 'startAction',
              displayName: 'Additional Actions when Start Button is Pressed',
              type: 'action',
            },
          ],
        },
        {
          name: 'pauseButton',
          displayName: 'Pause Button',
          props: [
            {
              name: 'iconName',
              displayName: 'Icon',
              type: 'icon',
              default: 'pause',
            },
            {
              name: 'color',
              displayName: 'Icon Color',
              type: 'color',
              default: '#757575',
            },
            { name: 'pauseAction', displayName: 'Action', type: 'action' },
          ],
        },
        {
          name: 'resetButton',
          displayName: 'Reset Button',
          props: [
            {
              name: 'iconName',
              displayName: 'Icon',
              type: 'icon',
              default: 'replay',
            },
            {
              name: 'color',
              displayName: 'Icon Color',
              type: 'color',
              default: '#757575',
            },
            {
              name: 'resetAction',
              displayName: 'Additional Actions when Reset Button is Pressed',
              type: 'action',
            },
          ],
        },
        {
          name: 'lapButton',
          displayName: 'Lap Button',
          props: [
            { name: 'enabled', type: 'boolean', default: false },
            {
              name: 'iconName',
              displayName: 'Icon',
              type: 'icon',
              default: 'timer',
            },
            {
              name: 'color',
              displayName: 'Icon Color',
              type: 'color',
              default: '#757575',
            },
            {
              name: 'lapText',
              displayName: 'Lap Prefix',
              type: 'text',
              default: 'Lap:',
            },
            {
              name: 'lapColor',
              displayName: 'Lap Text Color',
              type: 'color',
              default: '@primary',
            },
            {
              name: 'lapTextSize',
              displayName: 'Lap Text Size',
              type: 'number',
              default: 12,
            },
            {
              name: 'lapAction',
              displayName: 'Additional Actions when Lap Button is Pressed',
              type: 'action',
              arguments: [
                { type: 'number', displayName: 'Time (milliseconds)' },
                { type: 'text', displayName: 'Time (text)' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
