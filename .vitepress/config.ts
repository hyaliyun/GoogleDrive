import fs from 'fs'
import path from 'path'
import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'
import { headerPlugin } from './headerMdPlugin'
// import { textAdPlugin } from './textAdMdPlugin'


const nav: ThemeConfig['nav'] = [
  {
    text: 'Home',
    activeMatch: `^/(guide|style-guide|cookbook|examples)/`,
    items: [
      { text: 'Google token', link: '/drive/team' },
      { text: 'Google drive', link: '/drive/customers'},
      { text: 'Google meet', link: '/drive/meet' },
      { text: 'Google chat', link: '/drive/chat' },
    ]
  },
  {
    text: 'Docs',
    activeMatch: `^/(guide|style-guide|cookbook|examples)/`,
    items: [
      { text: 'Guide', link: '/guide/introduction' },
      { text: 'Tutorial', link: '/tutorial/' },
      { text: 'Examples', link: '/examples/' },
      { text: 'Quick Start', link: '/guide/quick-start' },
      // { text: 'Style Guide', link: '/style-guide/' },
      { text: 'Glossary', link: '/glossary/' },
      { text: 'Error Reference', link: '/error-reference/' },
      { text: 'Google token', link: '/drive/team' },
      {
        text: 'Material Design',
        link: 'https://www.434x.com'
      }
    ]
  },
  {
    text: 'API',
    activeMatch: `^/api/`,
    link: '/api/'
  },
  {
    text: 'rclone',
    activeMatch: `^/rclone/`,
    link: '/rclone/'
  },
  {
    text: 'Drive',
    activeMatch: `^/flutter/`,
    link: '/flutter/'
  },
  {
    text: 'Ecosystem',
    activeMatch: `^/ecosystem/`,
    items: [
      {
        text: 'Resources',
        items: [
          { text: 'Google token', link: '/drive/team' },
          { text: 'Partners', link: '/partners/' },
          { text: 'Themes', link: '/ecosystem/themes' },
          { text: 'UI Components', link: 'https://a.543x.com' },
          {
            text: 'Certification',
            link: 'https://b.543x.com'
          },
          { text: 'Jobs', link: 'https://c.543x.com' },
          { text: 'T-Shirt Shop', link: 'https://d.543x.com' }
        ]
      },
      {
        text: 'Official Libraries',
        items: [
          { text: 'Vue Router', link: 'https://e.543x.com/' },
          { text: 'Pinia', link: 'https://f.543x.com/' },
          { text: 'Tooling Guide', link: '/guide/scaling-up/tooling.html' }
        ]
      },
      {
        text: 'Video Courses',
        items: [
          {
            text: 'Vue Mastery',
            link: 'https://g.543x.com'
          },
          {
            text: 'Vue School',
            link: 'https://h.543x.com'
          }
        ]
      },
      {
        text: 'Help',
        items: [
          {
            text: 'Discord Chat',
            link: 'https://i.543x.com'
          },
          {
            text: 'GitHub Discussions',
            link: 'https://github.com/hyaliyun/GoogleDrive'
          },
          { text: 'DEV Community', link: 'https://www.z2.pw' }
        ]
      },
      {
        text: 'News',
        items: [
          { text: 'Blog', link: 'https://c.543x.com' },
          { text: 'Twitter', link: 'https://d.543x.com' },
          { text: 'Events', link: 'https://e.543x.com' },
          { text: 'CMS', link: 'https://w.z2.pw' },
          { text: 'GoogleSheets', link: 'https://a.z2.pw' },
          { text: 'Tailwind', link: 'https://a.434x.com' },
          { text: 'Three.js', link: 'https://b.434x.com' },
          {
            text: 'The Documentary',
            link: 'https://www.youtube.com/@543x-com'
          },
          { text: 'Newsletters', link: '/ecosystem/newsletters' }
        ]
      }
    ]
  },
  {
    text: 'About',
    activeMatch: `^/about/`,
    items: [
      { text: 'FAQ', link: '/about/faq' },
      { text: 'Team', link: '/about/team' },
      { text: 'Releases', link: '/about/releases' },
      {
        text: 'Community Guide',
        link: '/about/community-guide'
      },
      { text: 'Code of Conduct', link: '/about/coc' },
      { text: 'Privacy Policy', link: '/about/privacy' },
    ]
  },
  {
    text: 'SHOWCASE',
    link: '/partners/',
    activeMatch: `^/partners/`
  }
]

export const sidebar: ThemeConfig['sidebar'] = {
  '/guide/': [
    {
      text: 'Getting Started',
      items: [
        { text: 'Introduction', link: '/guide/introduction' },
        {
          text: 'Quick Start',
          link: '/guide/quick-start'
        }
      ]
    },
    {
      text: 'material',
      items: [
        {
          text: 'building-from-source',
          link: '/guide/material/building-from-source'
        },
        {
          text: 'catalog-app',
          link: '/guide/material/catalog-app'
        },
        {
          text: 'contributing',
          link: '/guide/material/contributing'
        },
        {
          text: 'directorystructure',
          link: '/guide/material/directorystructure'
        },
        {
          text: 'getting-started',
          link: '/guide/material/getting-started'
        },
        {
          text: 'theming',
          link: '/guide/material/theming'
        },
        {
          text: 'using-snapshot-version',
          link: '/guide/material/using-snapshot-version'
        },
        {
          text: 'CanonicalLayouts',
          link: '/guide/material/CanonicalLayouts'
        },
        {
          text: 'PredictiveBack',
          link: '/guide/material/PredictiveBack'
        }
      ]
    }, 
    {
      text: 'theming',
      items: [
        {
          text: 'Color',
          link: '/guide/theming/Color'
        },
        {
          text: 'Dark',
          link: '/guide/theming/Dark'
        },
        {
          text: 'Motion',
          link: '/guide/theming/Motion'
        },
        {
          text: 'Shape',
          link: '/guide/theming/Shape'
        },
        {
          text: 'Typography',
          link: '/guide/theming/Typography'
        }
      ]
    }, 
     {
      text: 'components',
      items: [
        {
          text: 'async',
          link: '/guide/components/async'
        },
        {
          text: 'attrs',
          link: '/guide/components/attrs'
        },
        {
          text: 'BadgeDrawable',
          link: '/guide/components/BadgeDrawable'
        },
        {
          text: 'Banner',
          link: '/guide/components/Banner'
        },
        {
          text: 'BottomAppBar',
          link: '/guide/components/BottomAppBar'
        },
        {
          text: 'BottomNavigation',
          link: '/guide/components/BottomNavigation'
        },
        {
          text: 'BottomSheet',
          link: '/guide/components/BottomSheet'
        },
        {
          text: 'Button',
          link: '/guide/components/Button'
        },
        {
          text: 'Card',
          link: '/guide/components/Card'
        },
        {
          text: 'Carousel',
          link: '/guide/components/Carousel'
        },
        {
          text: 'Checkbox',
          link: '/guide/components/Checkbox'
        },
        {
          text: 'Chip',
          link: '/guide/components/Chip'
        },
        {
          text: 'DataTable',
          link: '/guide/components/DataTable'
        },
        {
          text: 'DatePicker',
          link: '/guide/components/DatePicker'
        },
        {
          text: 'Dialog',
          link: '/guide/components/Dialog'
        },
        {
          text: 'Divider',
          link: '/guide/components/Divider'
        },
        {
          text: 'events',
          link: '/guide/components/events'
        },
        {
          text: 'FloatingActionButton',
          link: '/guide/components/FloatingActionButton'
        },
        {
          text: 'ImageList',
          link: '/guide/components/ImageList'
        },
        {
          text: 'List',
          link: '/guide/components/List'
        },
        {
          text: 'LoadingIndicator',
          link: '/guide/components/LoadingIndicator'
        },
        {
          text: 'MaterialTextView',
          link: '/guide/components/MaterialTextView'
        },
        {
          text: 'Menu',
          link: '/guide/components/Menu'
        },
        {
          text: 'NavigationDrawer',
          link: '/guide/components/NavigationDrawer'
        },
        {
          text: 'NavigationRail',
          link: '/guide/components/NavigationRail'
        },
        {
          text: 'ProgressIndicator',
          link: '/guide/components/ProgressIndicator'
        },
        {
          text: 'props',
          link: '/guide/components/props'
        },
        {
          text: 'provide-inject',
          link: '/guide/components/provide-inject'
        },
        {
          text: 'RadioButton',
          link: '/guide/components/RadioButton'
        },
        {
          text: 'registration',
          link: '/guide/components/registration'
        },
        {
          text: 'Search',
          link: '/guide/components/Search'
        },
        {
          text: 'SideSheet',
          link: '/guide/components/SideSheet'
        },
        {
          text: 'Slider',
          link: '/guide/components/Slider'
        },
        {
          text: 'slots',
          link: '/guide/components/slots'
        },
        {
          text: 'Snackbar',
          link: '/guide/components/Snackbar'
        },
        {
          text: 'Switch',
          link: '/guide/components/Switch'
        },
        {
          text: 'Tabs',
          link: '/guide/components/Tabs'
        },
        {
          text: 'TextField',
          link: '/guide/components/TextField'
        },
        {
          text: 'TimePicker',
          link: '/guide/components/TimePicker'
        },
        {
          text: 'Tooltip',
          link: '/guide/components/Tooltip'
        },
        {
          text: 'TopAppBar',
          link: '/guide/components/TopAppBar'
        },
        {
          text: 'v-model',
          link: '/guide/components/v-model'
        }
      ]
    },
    {
      text: 'Essentials',
      items: [
        {
          text: 'Creating an Application',
          link: '/guide/essentials/application'
        },
        {
          text: 'Template Syntax',
          link: '/guide/essentials/template-syntax'
        },
        {
          text: 'Reactivity Fundamentals',
          link: '/guide/essentials/reactivity-fundamentals'
        },
        {
          text: 'Computed Properties',
          link: '/guide/essentials/computed'
        },
        {
          text: 'Class and Style Bindings',
          link: '/guide/essentials/class-and-style'
        },
        {
          text: 'Conditional Rendering',
          link: '/guide/essentials/conditional'
        },
        { text: 'List Rendering', link: '/guide/essentials/list' },
        {
          text: 'Event Handling',
          link: '/guide/essentials/event-handling'
        },
        { text: 'Form Input Bindings', link: '/guide/essentials/forms' },
        {
          text: 'Lifecycle Hooks',
          link: '/guide/essentials/lifecycle'
        },
        { text: 'Watchers', link: '/guide/essentials/watchers' },
        { text: 'Template Refs', link: '/guide/essentials/template-refs' },
        {
          text: 'Components Basics',
          link: '/guide/essentials/component-basics'
        }
      ]
    },
    {
      text: 'Components In-Depth',
      items: [
        {
          text: 'Registration',
          link: '/guide/components/registration'
        },
        { text: 'Props', link: '/guide/components/props' },
        { text: 'Events', link: '/guide/components/events' },
        { text: 'Component v-model', link: '/guide/components/v-model' },
        {
          text: 'Fallthrough Attributes',
          link: '/guide/components/attrs'
        },
        { text: 'Slots', link: '/guide/components/slots' },
        {
          text: 'Provide / inject',
          link: '/guide/components/provide-inject'
        },
        {
          text: 'Async Components',
          link: '/guide/components/async'
        }
      ]
    },
    {
      text: 'Reusability',
      items: [
        {
          text: 'Composables',
          link: '/guide/reusability/composables'
        },
        {
          text: 'Custom Directives',
          link: '/guide/reusability/custom-directives'
        },
        { text: 'Plugins', link: '/guide/reusability/plugins' }
      ]
    },
    {
      text: 'Built-in Components',
      items: [
        { text: 'Transition', link: '/guide/built-ins/transition' },
        {
          text: 'TransitionGroup',
          link: '/guide/built-ins/transition-group'
        },
        { text: 'KeepAlive', link: '/guide/built-ins/keep-alive' },
        { text: 'Teleport', link: '/guide/built-ins/teleport' },
        { text: 'Suspense', link: '/guide/built-ins/suspense' }
      ]
    },
    {
      text: 'Scaling Up',
      items: [
        { text: 'Single-File Components', link: '/guide/scaling-up/sfc' },
        { text: 'Tooling', link: '/guide/scaling-up/tooling' },
        { text: 'Routing', link: '/guide/scaling-up/routing' },
        {
          text: 'State Management',
          link: '/guide/scaling-up/state-management'
        },
        { text: 'Testing', link: '/guide/scaling-up/testing' },
        {
          text: 'Server-Side Rendering (SSR)',
          link: '/guide/scaling-up/ssr'
        }
      ]
    },
    {
      text: 'Best Practices',
      items: [
        {
          text: 'Production Deployment',
          link: '/guide/best-practices/production-deployment'
        },
        {
          text: 'Performance',
          link: '/guide/best-practices/performance'
        },
        {
          text: 'Accessibility',
          link: '/guide/best-practices/accessibility'
        },
        {
          text: 'Security',
          link: '/guide/best-practices/security'
        }
      ]
    },
    {
      text: 'TypeScript',
      items: [
        { text: 'Overview', link: '/guide/typescript/overview' },
        {
          text: 'TS with Composition API',
          link: '/guide/typescript/composition-api'
        },
        {
          text: 'TS with Options API',
          link: '/guide/typescript/options-api'
        }
      ]
    },
    {
      text: 'Extra Topics',
      items: [
        {
          text: 'Ways of Using Vue',
          link: '/guide/extras/ways-of-using-vue'
        },
        {
          text: 'Composition API FAQ',
          link: '/guide/extras/composition-api-faq'
        },
        {
          text: 'Reactivity in Depth',
          link: '/guide/extras/reactivity-in-depth'
        },
        {
          text: 'Rendering Mechanism',
          link: '/guide/extras/rendering-mechanism'
        },
        {
          text: 'Render Functions & JSX',
          link: '/guide/extras/render-function'
        },
        {
          text: 'Vue and Web Components',
          link: '/guide/extras/web-components'
        },
        {
          text: 'Animation Techniques',
          link: '/guide/extras/animation'
        }
      ]
    }
  ],
  '/api/': [
    {
      text: 'components',
      items: [
        {
          text: 'button',
          link: '/api/components/button'
        },
        {
          text: 'checkbox',
          link: '/api/components/checkbox'
        },
        {
          text: 'chip',
          link: '/api/components/chip'
        },
        {
          text: 'dialog',
          link: '/api/components/dialog'
        },
        {
          text: 'divider',
          link: '/api/components/divider'
        },
        {
          text: 'elevation',
          link: '/api/components/elevation'
        },
        {
          text: 'fab',
          link: '/api/components/fab'
        },
        {
          text: 'focus-ring',
          link: '/api/components/focus-ring'
        },
        {
          text: 'icon',
          link: '/api/components/icon'
        },
        {
          text: 'icon-button',
          link: '/api/components/icon-button'
        },
        {
          text: 'list',
          link: '/api/components/list'
        },
        {
          text: 'menu',
          link: '/api/components/menu'
        },
        {
          text: 'progress',
          link: '/api/components/progress'
        },
        {
          text: 'radio',
          link: '/api/components/radio'
        },
        {
          text: 'ripple',
          link: '/api/components/ripple'
        },
        {
          text: 'select',
          link: '/api/components/select'
        },
        {
          text: 'slider',
          link: '/api/components/slider'
        },
        {
          text: 'switch',
          link: '/api/components/switch'
        },
        {
          text: 'tabs',
          link: '/api/components/tabs'
        },
        {
          text: 'text-field',
          link: '/api/components/text-field'
        }
      ]
    },
    {
      text: 'theming',
      items: [
        {
          text: 'color',
          link: '/api/theming/color'
        },
        {
          text: 'intro',
          link: '/api/theming/intro'
        },
        {
          text: 'quick-start',
          link: '/api/theming/quick-start'
        },
        {
          text: 'README',
          link: '/api/theming/README'
        },
        {
          text: 'roadmap',
          link: '/api/theming/roadmap'
        },
        {
          text: 'shape',
          link: '/api/theming/shape'
        },
        {
          text: 'size',
          link: '/api/theming/size'
        },
        {
          text: 'support',
          link: '/api/theming/support'
        },
        {
          text: 'typography',
          link: '/api/theming/typography'
        }
      ]
    },
    {
      text: 'Global API',
      items: [
        { text: 'Application', link: '/api/application' },
        {
          text: 'General',
          link: '/api/general'
        }
      ]
    },
    {
      text: 'Composition API',
      items: [
        { text: 'setup()', link: '/api/composition-api-setup' },
        {
          text: 'Reactivity: Core',
          link: '/api/reactivity-core'
        },
        {
          text: 'Reactivity: Utilities',
          link: '/api/reactivity-utilities'
        },
        {
          text: 'Reactivity: Advanced',
          link: '/api/reactivity-advanced'
        },
        {
          text: 'Lifecycle Hooks',
          link: '/api/composition-api-lifecycle'
        },
        {
          text: 'Dependency Injection',
          link: '/api/composition-api-dependency-injection'
        },
        {
          text: 'Helpers',
          link: '/api/composition-api-helpers'
        }
      ]
    },
    {
      text: 'Options API',
      items: [
        { text: 'Options: State', link: '/api/options-state' },
        { text: 'Options: Rendering', link: '/api/options-rendering' },
        {
          text: 'Options: Lifecycle',
          link: '/api/options-lifecycle'
        },
        {
          text: 'Options: Composition',
          link: '/api/options-composition'
        },
        { text: 'Options: Misc', link: '/api/options-misc' },
        {
          text: 'Component Instance',
          link: '/api/component-instance'
        }
      ]
    },
    {
      text: 'Built-ins',
      items: [
        { text: 'Directives', link: '/api/built-in-directives' },
        { text: 'Components', link: '/api/built-in-components' },
        {
          text: 'Special Elements',
          link: '/api/built-in-special-elements'
        },
        {
          text: 'Special Attributes',
          link: '/api/built-in-special-attributes'
        }
      ]
    },
    {
      text: 'Single-File Component',
      items: [
        { text: 'Syntax Specification', link: '/api/sfc-spec' },
        { text: '<script setup>', link: '/api/sfc-script-setup' },
        { text: 'CSS Features', link: '/api/sfc-css-features' }
      ]
    },
    {
      text: 'Advanced APIs',
      items: [
        { text: 'Custom Elements', link: '/api/custom-elements' },
        { text: 'Render Function', link: '/api/render-function' },
        { text: 'Server-Side Rendering', link: '/api/ssr' },
        { text: 'TypeScript Utility Types', link: '/api/utility-types' },
        { text: 'Custom Renderer', link: '/api/custom-renderer' },
        { text: 'Compile-Time Flags', link: '/api/compile-time-flags' }
      ]
    }
  ],
'/rclone/': [
    {
      text: 'commands',
      items: [
        {
          text: 'rclone',
          link: '/rclone/commands/rclone'
        },
        {
          text: 'rclone_about',
          link: '/rclone/commands/rclone_about'
        },
        {
          text: 'rclone_authorize',
          link: '/rclone/commands/rclone_authorize'
        },
        {
          text: 'rclone_backend',
          link: '/rclone/commands/rclone_backend'
        },
        {
          text: 'rclone_bisync',
          link: '/rclone/commands/rclone_bisync'
        },
        {
          text: 'rclone_cat',
          link: '/rclone/commands/rclone_cat'
        },
        {
          text: 'rclone_check',
          link: '/rclone/commands/rclone_check'
        },
        {
          text: 'rclone_checksum',
          link: '/rclone/commands/rclone_checksum'
        },
        {
          text: 'rclone_cleanup',
          link: '/rclone/commands/rclone_cleanup'
        },
        {
          text: 'rclone_completion_bash',
          link: '/rclone/commands/rclone_completion_bash'
        },
        {
          text: 'rclone_completion_fish',
          link: '/rclone/commands/rclone_completion_fish'
        },
        {
          text: 'rclone_completion_powershell',
          link: '/rclone/commands/rclone_completion_powershell'
        },
        {
          text: 'rclone_completion_zsh',
          link: '/rclone/commands/rclone_completion_zsh'
        },
        {
          text: 'rclone_completion',
          link: '/rclone/commands/rclone_completion'
        },
        {
          text: 'rclone_config_create',
          link: '/rclone/commands/rclone_config_create'
        },
        {
          text: 'rclone_config_delete',
          link: '/rclone/commands/rclone_config_delete'
        },
        {
          text: 'rclone_config_disconnect',
          link: '/rclone/commands/rclone_config_disconnect'
        },
        {
          text: 'rclone_config_dump',
          link: '/rclone/commands/rclone_config_dump'
        },
        {
          text: 'rclone_config_edit',
          link: '/rclone/commands/rclone_config_edit'
        },
        {
          text: 'rclone_config_encryption',
          link: '/rclone/commands/rclone_config_encryption'
        },
        {
          text: 'rclone_config_encryption_check',
          link: '/rclone/commands/rclone_config_encryption_check'
        },
        {
          text: 'rclone_config_encryption_remove',
          link: '/rclone/commands/rclone_config_encryption_remove'
        },
        {
          text: 'rclone_config_encryption_set',
          link: '/rclone/commands/rclone_config_encryption_set'
        },
        {
          text: 'rclone_config_file',
          link: '/rclone/commands/rclone_config_file'
        },
        {
          text: 'rclone_config_password',
          link: '/rclone/commands/rclone_config_password'
        },
        {
          text: 'rclone_config_paths',
          link: '/rclone/commands/rclone_config_paths'
        },
        {
          text: 'rclone_config_providers',
          link: '/rclone/commands/rclone_config_providers'
        },
        {
          text: 'rclone_config_reconnect',
          link: '/rclone/commands/rclone_config_reconnect'
        },
        {
          text: 'rclone_config_redacted',
          link: '/rclone/commands/rclone_config_redacted'
        },
        {
          text: 'rclone_config_show',
          link: '/rclone/commands/rclone_config_show'
        },
        {
          text: 'rclone_config_touch',
          link: '/rclone/commands/rclone_config_touch'
        },
        {
          text: 'rclone_config_update',
          link: '/rclone/commands/rclone_config_update'
        },
        {
          text: 'rclone_config_userinfo',
          link: '/rclone/commands/rclone_config_userinfo'
        },
        {
          text: 'rclone_copy',
          link: '/rclone/commands/rclone_copy'
        },
                {
          text: 'rclone_copyto',
          link: '/rclone/commands/rclone_copyto'
        },
        {
          text: 'rclone_copyurl',
          link: '/rclone/commands/rclone_copyurl'
        },
        {
          text: 'rclone_cryptcheck',
          link: '/rclone/commands/rclone_cryptcheck'
        },
        {
          text: 'rclone_cryptdecode',
          link: '/rclone/commands/rclone_cryptdecode'
        },
        {
          text: 'rclone_dedupe',
          link: '/rclone/commands/rclone_dedupe'
        },
        {
          text: 'rclone_delete',
          link: '/rclone/commands/rclone_delete'
        },
        {
          text: 'rclone_deletefile',
          link: '/rclone/commands/rclone_deletefile'
        },
                {
          text: 'rclone_gendocs',
          link: '/rclone/commands/rclone_gendocs'
        },
        {
          text: 'rclone_gitannex',
          link: '/rclone/commands/rclone_gitannex'
        },        {
          text: 'rclone_hashsum',
          link: '/rclone/commands/rclone_hashsum'
        },

        {
          text: 'rclone_link',
          link: '/rclone/commands/rclone_link'
        },
        {
          text: 'rclone_listremotes',
          link: '/rclone/commands/rclone_listremotes'
        },

        {
          text: 'rclone_ls',
          link: '/rclone/commands/rclone_ls'
        },
        {
          text: 'rclone_lsd',
          link: '/rclone/commands/rclone_lsd'
        },
        {
          text: 'rclone_lsf',
          link: '/rclone/commands/rclone_lsf'
        },
        {
          text: 'rclone_lsjson',
          link: '/rclone/commands/rclone_lsjson'
        },
        {
          text: 'rclone_lsl',
          link: '/rclone/commands/rclone_lsl'
        },
        {
          text: 'rclone_md5sum',
          link: '/rclone/commands/rclone_md5sum'
        },
        {
          text: 'rclone_mkdir',
          link: '/rclone/commands/rclone_mkdir'
        },
        {
          text: 'rclone_mount',
          link: '/rclone/commands/rclone_mount'
        },
        {
          text: 'rclone_move',
          link: '/rclone/commands/rclone_move'
        },
        {
          text: 'rclone_moveto',
          link: '/rclone/commands/rclone_moveto'
        },
        {
          text: 'rclone_ncdu',
          link: '/rclone/commands/rclone_ncdu'
        },
        {
          text: 'rclone_nfsmount',
          link: '/rclone/commands/rclone_nfsmount'
        },
        {
          text: 'rclone_obscure',
          link: '/rclone/commands/rclone_obscure'
        },
        {
          text: 'rclone_purge',
          link: '/rclone/commands/rclone_purge'
        },
        {
          text: 'rclone_rc',
          link: '/rclone/commands/rclone_rc'
        },
        {
          text: 'rclone_rcat',
          link: '/rclone/commands/rclone_rcat'
        },
        {
          text: 'rclone_rcd',
          link: '/rclone/commands/rclone_rcd'
        },
        {
          text: 'rclone_rmdir',
          link: '/rclone/commands/rclone_rmdir'
        },
        {
          text: 'rclone_rmdirs',
          link: '/rclone/commands/rclone_rmdirs'
        },
        {
          text: 'rclone_selfupdate',
          link: '/rclone/commands/rclone_selfupdate'
        },
        {
          text: 'rclone_serve',
          link: '/rclone/commands/rclone_serve'
        },

        {
          text: 'rclone_serve_dlna',
          link: '/rclone/commands/rclone_serve_dlna'
        },
        {
          text: 'rclone_serve_docker',
          link: '/rclone/commands/rclone_serve_docker'
        },
        {
          text: 'rclone_serve_ftp',
          link: '/rclone/commands/rclone_serve_ftp'
        },

        {
          text: 'rclone_serve_http',
          link: '/rclone/commands/rclone_serve_http'
        },
        {
          text: 'rclone_serve_nfs',
          link: '/rclone/commands/rclone_serve_nfs'
        },
        {
          text: 'rclone_serve_restic',
          link: '/rclone/commands/rclone_serve_restic'
        },
        {
          text: 'rclone_serve_s3',
          link: '/rclone/commands/rclone_serve_s3'
        },
        {
          text: 'rclone_serve_sftp',
          link: '/rclone/commands/rclone_serve_sftp'
        },
        {
          text: 'rclone_serve_webdav',
          link: '/rclone/commands/rclone_serve_webdav'
        },

        {
          text: 'rclone_settier',
          link: '/rclone/commands/rclone_settier'
        },
        {
          text: 'rclone_sha1sum',
          link: '/rclone/commands/rclone_sha1sum'
        },
        {
          text: 'rclone_size',
          link: '/rclone/commands/rclone_size'
        },
        {
          text: 'rclone_sync',
          link: '/rclone/commands/rclone_sync'
        },
        {
          text: 'rclone_test',
          link: '/rclone/commands/rclone_test'
        },

        {
          text: 'rclone_test_changenotify',
          link: '/rclone/commands/rclone_test_changenotify'
        },
        {
          text: 'rclone_test_histogram',
          link: '/rclone/commands/rclone_test_histogram'
        },
        {
          text: 'rclone_test_makefile',
          link: '/rclone/commands/rclone_test_makefile'
        },
        {
          text: 'rclone_test_makefiles',
          link: '/rclone/commands/rclone_test_makefiles'
        },
        {
          text: 'rclone_test_memory',
          link: '/rclone/commands/rclone_test_memory'
        },
        {
          text: 'rclone_touch',
          link: '/rclone/commands/rclone_touch'
        },
        {
          text: 'rclone_tree',
          link: '/rclone/commands/rclone_tree'
        },
        {
          text: 'rclone_version',
          link: '/rclone/commands/rclone_version'
        }
      ]
    },
    {
      text: 'oracleobject',
      items: [
        {
          text: 'onedrive',
          link: '/rclone/oracleobject/onedrive'
        },
        {
          text: 'opendrive',
          link: '/rclone/oracleobject/opendrive'
        },
        {
          text: 'overview',
          link: '/rclone/oracleobject/overview'
        },
        {
          text: 'pcloud',
          link: '/rclone/oracleobject/pcloud'
        },
        {
          text: 'pikpak',
          link: '/rclone/oracleobject/pikpak'
        },
        {
          text: 'pixeldrain',
          link: '/rclone/oracleobject/pixeldrain'
        },
        {
          text: 'premiumizeme',
          link: '/rclone/oracleobject/premiumizeme'
        },
        {
          text: 'privacy',
          link: '/rclone/oracleobject/privacy'
        },
        {
          text: 'protondrive',
          link: '/rclone/oracleobject/protondrive'
        },
        {
          text: 'putio',
          link: '/rclone/oracleobject/putio'
        },
        {
          text: 'qingstor',
          link: '/rclone/oracleobject/qingstor'
        },
        {
          text: 'quatrix',
          link: '/rclone/oracleobject/quatrix'
        },
        {
          text: 'release_signing',
          link: '/rclone/oracleobject/release_signing'
        },
        {
          text: 'remote_setup',
          link: '/rclone/oracleobject/remote_setup'
        },
        {
          text: 's3',
          link: '/rclone/oracleobject/s3'
        },
        {
          text: 'seafile',
          link: '/rclone/oracleobject/seafile'
        },
        {
          text: 'sftp',
          link: '/rclone/oracleobject/sftp'
        },
        {
          text: 'sia',
          link: '/rclone/oracleobject/sia'
        },
        {
          text: 'smb',
          link: '/rclone/oracleobject/smb'
        },
        {
          text: 'sponsor',
          link: '/rclone/oracleobject/sponsor'
        },
        {
          text: 'storj',
          link: '/rclone/oracleobject/storj'
        },
        {
          text: 'sugarsync',
          link: '/rclone/oracleobject/sugarsync'
        },
        {
          text: 'swift',
          link: '/rclone/oracleobject/swift'
        },
        {
          text: 'tutorial_mount',
          link: '/rclone/oracleobject/tutorial_mount'
        },
        {
          text: 'ulozto',
          link: '/rclone/oracleobject/ulozto'
        },
        {
          text: 'union',
          link: '/rclone/oracleobject/union'
        },
        {
          text: 'uptobox',
          link: '/rclone/oracleobject/uptobox'
        },
        {
          text: 'webdav',
          link: '/rclone/oracleobject/webdav'
        },
        {
          text: 'yandex',
          link: '/rclone/oracleobject/yandex'
        },
        {
          text: 'zoho',
          link: '/rclone/oracleobject/zoho'
        }
      ]
    },
    {
      text: 'storage',
      items: [
        {
          text: 'alias',
          link: '/rclone/storage/alias'
        },
        {
          text: 'amazonclouddrive',
          link: '/rclone/storage/amazonclouddrive'
        },
        {
          text: 'azureblob',
          link: '/rclone/storage/azureblob'
        },
        {
          text: 'azurefiles',
          link: '/rclone/storage/azurefiles'
        },
        {
          text: 'b2',
          link: '/rclone/storage/b2'
        },
        {
          text: 'bisync',
          link: '/rclone/storage/bisync'
        },
        {
          text: 'box',
          link: '/rclone/storage/box'
        },
        {
          text: 'bugs',
          link: '/rclone/storage/bugs'
        },


        {
          text: 'chunker',
          link: '/rclone/storage/chunker'
        },
        {
          text: 'combine',
          link: '/rclone/storage/combine'
        },

        {
          text: 'compress',
          link: '/rclone/storage/compress'
        },
        {
          text: 'contact',
          link: '/rclone/storage/contact'
        },
        {
          text: 'crypt',
          link: '/rclone/storage/crypt'
        },
        {
          text: 'docker',
          link: '/rclone/storage/docker'
        },
        {
          text: 'docs',
          link: '/rclone/storage/docs'
        },

        {
          text: 'drive',
          link: '/rclone/storage/drive'
        },
        {
          text: 'dropbox',
          link: '/rclone/storage/dropbox'
        },
        {
          text: 'faq',
          link: '/rclone/storage/faq'
        },
        {
          text: 'fichier',
          link: '/rclone/storage/fichier'
        },
        {
          text: 'filefabric',
          link: '/rclone/storage/filefabric'
        },
        {
          text: 'filescom',
          link: '/rclone/storage/filescom'
        },

        {
          text: 'flags',
          link: '/rclone/storage/flags'
        },
        {
          text: 'ftp',
          link: '/rclone/storage/ftp'
        },
        {
          text: 'gofile',
          link: '/rclone/storage/gofile'
        },
        {
          text: 'googlecloudstorage',
          link: '/rclone/storage/googlecloudstorage'
        },
        {
          text: 'googlephotos',
          link: '/rclone/storage/googlephotos'
        },
        {
          text: 'gui',
          link: '/rclone/storage/gui'
        },
        {
          text: 'hasher',
          link: '/rclone/storage/hasher'
        },
        {
          text: 'hdfs',
          link: '/rclone/storage/hdfs'
        },
        {
          text: 'hidrive',
          link: '/rclone/storage/hidrive'
        },
        {
          text: 'http',
          link: '/rclone/storage/http'
        },
        {
          text: 'imagekit',
          link: '/rclone/storage/imagekit'
        },

        {
          text: 'internetarchive',
          link: '/rclone/storage/internetarchive'
        },
        {
          text: 'jottacloud',
          link: '/rclone/storage/jottacloud'
        },
        {
          text: 'koofr',
          link: '/rclone/storage/koofr'
        },
        {
          text: 'licence',
          link: '/rclone/storage/licence'
        },
        {
          text: 'linkbox',
          link: '/rclone/storage/linkbox'
        },
        {
          text: 'local',
          link: '/rclone/storage/local'
        },
        {
          text: 'mailru',
          link: '/rclone/storage/mailru'
        },
        {
          text: 'mega',
          link: '/rclone/storage/mega'
        },
        {
          text: 'memory',
          link: '/rclone/storage/memory'
        },
        {
          text: 'netstorage',
          link: '/rclone/storage/netstorage'
        }
      ]
    },
  ],
'/flutter/': [
    {
      text: 'about',
      items: [
        {
          text: 'gdrive',
          link: '/flutter/about/gdrive'
        },
        {
          text: 'FUSE filesystem',
          link: '/flutter/about/FUSE filesystem over Google Drive'
        },
        {
          text: 'Google Apps',
          link: '/flutter/about/Google Apps'
        },
        {
          text: 'Unlimited Drive Storage',
          link: '/flutter/about/Unlimited Drive Storage'
        },
        {
          text: 'gdown',
          link: '/flutter/about/gdown'
        },
        {
          text: 'LLM App',
          link: '/flutter/about/LLM App'
        },
        {
          text: 'Remotely Save',
          link: '/flutter/about/Remotely Save'
        },
        {
          text: 'mirror-leech-telegram-bot',
          link: '/flutter/about/mirror-leech-telegram-bot'
        }
      ]
    },
    {
      text: 'contributing',
      items: [
        {
          text: 'Grive2 0.5.3',
          link: '/flutter/contributing/Grive2 0.5.3'
        },
        {
          text: 'Google Drive Copy',
          link: '/flutter/contributing/Google Drive Copy'
        },

        {
          text: 'Files for Meteor.js',
          link: '/flutter/contributing/Files for Meteor.js'
        },
        {
          text: 'goindex-theme-acrou',
          link: '/flutter/contributing/goindex-theme-acrou'
        },
        {
          text: 'gdown.pl',
          link: '/flutter/contributing/gdown.pl'
        },
        {
          text: 'Google drive upload',
          link: '/flutter/contributing/Google drive upload'
        },
        {
          text: 'Golang FTP Server',
          link: '/flutter/contributing/Golang FTP Server'
        },
        {
          text: 'Google Drive Uploader',
          link: '/flutter/contributing/Google Drive Uploader'
        },
        {
          text: 'file server',
          link: '/flutter/contributing/file server'
        },
        {
          text: 'Drive Cli',
          link: '/flutter/contributing/Drive Cli'
        },
        {
          text: 'Notice on username change',
          link: '/flutter/contributing/Notice on username change'
        },
        {
          text: 'Google Drive PDF',
          link: '/flutter/contributing/Google Drive PDF'
        },
        {
          text: 'Obsidian Google Drive ',
          link: '/flutter/contributing/Obsidian Google Drive '
        },
        {
          text: 'unity-google-drive',
          link: '/flutter/contributing/unity-google-drive'
        },
        {
          text: 'Google Drive CMS',
          link: '/flutter/contributing/Google Drive CMS'
        }
  ]
},
{
  text: 'ecosystem',
  items: [

    {
      text: 'DevTools Timeline',
      link: '/flutter/ecosystem/DevTools Timeline'
    },
    {
      text: 'Googleapis Client',
      link: '/flutter/ecosystem/Googleapis Client'
    },
    {
      text: 'googledrive',
      link: '/flutter/ecosystem/googledrive'
    },
    {
      text: 'opendatasets',
      link: '/flutter/ecosystem/opendatasets'
    },
    {
      text: 'R2-Explorer',
      link: '/flutter/ecosystem/R2-Explorer'
    },
    {
      text: 'Google Drive in ',
      link: '/flutter/ecosystem/Google Drive in '
    },
    {
      text: 'Drive Uploader',
      link: '/flutter/ecosystem/Drive Uploader'
    }
  ]
},
{
  text: 'infra',
  items: [
    {
      text: 'Zee Mirror',
      link: '/flutter/infra/Zee Mirror'
    },   
    {
      text: 'Google Drive Recursive',
      link: '/flutter/infra/Google Drive Recursive'
    },   
    
    {
      text: 'Google Secret Manager',
      link: '/flutter/infra/Google Secret Manager'
    },
    {
      text: 'ReactDrive CMS',
      link: '/flutter/infra/ReactDrive CMS'
    },
    {
      text: 'Flysystem adapter',
      link: '/flutter/infra/Flysystem adapter'
    },
    {
      text: 'Google Drive Alfred ',
      link: '/flutter/infra/Google Drive Alfred '
    },
    {
      text: 'Google Compute',
      link: '/flutter/infra/Google Compute'
    },
    {
      text: 'DriveBackup',
      link: '/flutter/infra/DriveBackup'
    },
    {
      text: 'gdrive-webdav',
      link: '/flutter/infra/gdrive-webdav'
    },
    {
      text: 'Virus-Builder',
      link: '/flutter/infra/Virus-Builder'
    },
    {
      text: 'llamaindex-omakase-rag',
      link: '/flutter/infra/llamaindex-omakase-rag'
    },
    {
      text: 'mysql-backup4j',
      link: '/flutter/infra/mysql-backup4j'
    },
    {
      text: 'DoubleDrive',
      link: '/flutter/infra/DoubleDrive'
    },
    {
      text: 'react-native-cloud-storage',
      link: '/flutter/infra/react-native-cloud-storage'
    },
    {
      text: 'laravel-google',
      link: '/flutter/infra/laravel-google'
    },
    {
      text: 'Google Cloud Storage',
      link: '/flutter/infra/Google Cloud Storage'
    }
  ]
},
{
  text: 'ecosystem',
  items: [
    {
      text: 'contributing',
      link: '/flutter/ecosystem/contributing'
    },
    {
      text: 'development-environment',
      link: '/flutter/ecosystem/development-environment'
    },
    {
      text: 'Package-migration-to',
      link: '/flutter/ecosystem/Package-migration-to'
    },
    {
      text: 'Plugins-and-Packages',
      link: '/flutter/ecosystem/Plugins-and-Packages'
    },
    {
      text: 'Plugins-development',
      link: '/flutter/ecosystem/Plugins-development'
    },
    {
      text: 'Plugin-Tests',
      link: '/flutter/ecosystem/Plugin-Tests'
    },
    {
      text: 'README',
      link: '/flutter/ecosystem/README'
    },
    {
      text: 'Understanding-Packages',
      link: '/flutter/ecosystem/Understanding-Packages-tests'
    },
    {
      text: 'Updating-Packages-repo',
      link: '/flutter/ecosystem/Updating-Packages-repo'
    }
  ]
},
{
  text: 'platforms',
  items: [
    {
      text: 'Accessibility-on-Windows',
      link: '/flutter/platforms/Accessibility-on-Windows'
    },
    {
      text: 'Android-Multidex-support',
      link: '/flutter/platforms/Android-Multidex-support'
    },
    {
      text: 'Android-Platform-Views',
      link: '/flutter/platforms/Android-Platform-Views'
    },
    {
      text: 'Android-projects',
      link: '/flutter/platforms/Android-projects'
    },
    {
      text: 'build-with-gradle',
      link: '/flutter/platforms/build-with-gradle'
    },
    {
      text: 'Debugging-issues',
      link: '/flutter/platforms/Debugging-issues'
    },
    {
      text: 'Gradle-for-Android',
      link: '/flutter/platforms/Gradle-for-Android'
    },
    {
      text: 'Hybrid-Composition',
      link: '/flutter/platforms/Hybrid-Composition'
    },
    {
      text: 'New-Android-version',
      link: '/flutter/platforms/New-Android-version'
    },
    {
      text: 'Resolving-common',
      link: '/flutter/platforms/Resolving-common'
    },
    {
      text: 'Testing-Android-Changes',
      link: '/flutter/platforms/Testing-Android-Changes'
    },
    {
      text: 'Texture-Layer-Hybrid',
      link: '/flutter/platforms/Texture-Layer-Hybrid'
    },
    {
      text: 'Updating-Material',
      link: '/flutter/platforms/Updating-Material'
    },
    {
      text: 'Upgrading-Engine',
      link: '/flutter/platforms/Upgrading-Engine'
    },
    {
      text: 'Upgrading-Flutter-projects',
      link: '/flutter/platforms/Upgrading-Flutter-projects'
    },
    {
      text: 'Virtual-Display',
      link: '/flutter/platforms/Virtual-Display'
    }
  ]
},
{
  text: 'postmortems',
  items: [
    {
      text: 'Postmortem-AndroidX',
      link: '/flutter/postmortems/Postmortem-AndroidX'
    },
    {
      text: 'Postmortem-Beta',
      link: '/flutter/postmortems/Postmortem-Beta'
    },
    {
      text: 'Postmortem-Build',
      link: '/flutter/postmortems/Postmortem-Build'
    },
    {
      text: 'Postmortem-flutte',
      link: '/flutter/postmortems/Postmortem-flutte'
    },
    {
      text: 'README',
      link: '/flutter/postmortems/README'
    },
    {
      text: 'Retrospective-Flutter',
      link: '/flutter/postmortems/Retrospective-Flutter'
    },
    {
      text: 'Widespread-Gradle',
      link: '/flutter/postmortems/Widespread-Gradle'
    },
    {
      text: 'Windows-Defender',
      link: '/flutter/postmortems/Windows-Defender'
    }
  ]
},
{
  text: 'releases',
  items: [
    {
      text: 'Bad-Builds',
      link: '/flutter/releases/Bad-Builds'
    },

    {
      text: 'Flutter-build-release',
      link: '/flutter/releases/Flutter-build-release'
    },
    {
      text: 'Flutter-Cherrypick-Process',
      link: '/flutter/releases/Flutter-Cherrypick-Process'
    },
    {
      text: 'Hotfix-Documentation',
      link: '/flutter/releases/Hotfix-Documentation'
    },
    {
      text: 'Notes---Flutter-1.2.1',
      link: '/flutter/releases/Notes---Flutter-1.2.1'
    },
    {
      text: 'Notes-Flutter-1.5.4',
      link: '/flutter/releases/Notes-Flutter-1.5.4'
    },
    {
      text: 'Notes-Flutter-1.7.8',
      link: '/flutter/releases/Notes-Flutter-1.7.8'
    },
    {
      text: 'Notes-Flutter-1.9.1',
      link: '/flutter/releases/Notes-Flutter-1.9.1'
    },
    {
      text: 'PRs-addressed-between',
      link: '/flutter/releases/PRs-addressed-between'
    },
    {
      text: 'Quality-Assurance',
      link: '/flutter/releases/Quality-Assurance'
    },
    {
      text: 'Release-process',
      link: '/flutter/releases/Release-process'
    },
    {
      text: 'Release-versioning',
      link: '/flutter/releases/Release-versioning'
    },
    {
      text: 'Upgrading-from',
      link: '/flutter/releases/Upgrading-from'
    },
    {
      text: 'Where-my-commit',
      link: '/flutter/releases/Where-my-commit'
    }
  ]
},
{
  text: 'tool',
  items: [
    {
      text: 'Fast-Start',
      link: '/flutter/tool/Fast-Start'
    },
    {
      text: 'Managing-template',
      link: '/flutter/tool/Managing-template'
    },
    {
      text: 'Old-Roadmaps',
      link: '/flutter/tool/Old-Roadmaps'
    },
    {
      text: 'README',
      link: '/flutter/tool/README'
    },
    {
      text: 'Roadmap',
      link: '/flutter/tool/Roadmap'
    },
    {
      text: 'The-flutter-run-variants',
      link: '/flutter/tool/The-flutter-run-variants'
    },
    {
      text: 'Using-custom-embedders',
      link: '/flutter/tool/Using-custom-embedders'
    }
  ]
},
{
  text: 'triage',
  items: [
    {
      text: 'across-screens',
      link: '/flutter/triage/across-screens'
    },
    {
      text: 'Add-Flutter-View',
      link: '/flutter/triage/Add-Flutter-View'
    },
    {
      text: 'Breaking-Commits',
      link: '/flutter/triage/Breaking-Commits'
    },
    {
      text: 'documentation-index',
      link: '/flutter/triage/documentation-index'
    },
    {
      text: 'Experimental-Add-Flutter',
      link: '/flutter/triage/Experimental-Add-Flutter'
    },
    {
      text: 'Flutter-migrate',
      link: '/flutter/triage/Flutter-migrate'
    },
    {
      text: 'Flutter-Web-Triage',
      link: '/flutter/triage/Flutter-Web-Triage'
    },
    {
      text: 'Multi-device-debugging',
      link: '/flutter/triage/Multi-device-debugging'
    },
    {
      text: 'new-embedding',
      link: '/flutter/triage/new-embedding'
    },
    {
      text: 'non-main-entrypoint',
      link: '/flutter/triage/non-main-entrypoint'
    },
    {
      text: 'README',
      link: '/flutter/triage/README'
    },
    {
      text: 'using-channels',
      link: '/flutter/triage/using-channels'
    },
    {
      text: 'Workarounds-for-common',
      link: '/flutter/triage/Workarounds-for-common'
    }
  ]
}
],
  '/examples/': [
    {
      text: 'Basic',
      items: [
        {
          text: 'Hello World',
          link: '/examples/#hello-world'
        },
        {
          text: 'Handling User Input',
          link: '/examples/#handling-input'
        },
        {
          text: 'Attribute Bindings',
          link: '/examples/#attribute-bindings'
        },
        {
          text: 'Conditionals and Loops',
          link: '/examples/#conditionals-and-loops'
        },
        {
          text: 'Form Bindings',
          link: '/examples/#form-bindings'
        },
        {
          text: 'Simple Component',
          link: '/examples/#simple-component'
        }
      ]
    },
    {
      text: 'Practical',
      items: [
        {
          text: 'Markdown Editor',
          link: '/examples/#markdown'
        },
        {
          text: 'Fetching Data',
          link: '/examples/#fetching-data'
        },
        {
          text: 'Grid with Sort and Filter',
          link: '/examples/#grid'
        },
        {
          text: 'Tree View',
          link: '/examples/#tree'
        },
        {
          text: 'SVG Graph',
          link: '/examples/#svg'
        },
        {
          text: 'Modal with Transitions',
          link: '/examples/#modal'
        },
        {
          text: 'List with Transitions',
          link: '/examples/#list-transition'
        },
        {
          text: 'TodoMVC',
          link: '/examples/#todomvc'
        }
      ]
    },
    {
      // https://eugenkiss.github.io/7guis/
      text: '7 GUIs',
      items: [
        {
          text: 'Counter',
          link: '/examples/#counter'
        },
        {
          text: 'Temperature Converter',
          link: '/examples/#temperature-converter'
        },
        {
          text: 'Flight Booker',
          link: '/examples/#flight-booker'
        },
        {
          text: 'Timer',
          link: '/examples/#timer'
        },
        {
          text: 'CRUD',
          link: '/examples/#crud'
        },
        {
          text: 'Circle Drawer',
          link: '/examples/#circle-drawer'
        },
        {
          text: 'Cells',
          link: '/examples/#cells'
        }
      ]
    }
  ],
  '/style-guide/': [
    {
      text: 'Style Guide',
      items: [
        {
          text: 'Overview',
          link: '/style-guide/'
        },
        {
          text: 'A - Essential',
          link: '/style-guide/rules-essential'
        },
        {
          text: 'B - Strongly Recommended',
          link: '/style-guide/rules-strongly-recommended'
        },
        {
          text: 'C - Recommended',
          link: '/style-guide/rules-recommended'
        },
        {
          text: 'D - Use with Caution',
          link: '/style-guide/rules-use-with-caution'
        }
      ]
    }
  ]
}


// Placeholder of the i18n config for @vuejs-translations.
// const i18n: ThemeConfig['i18n'] = {
// }

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  ignoreDeadLinks: true,
  sitemap: {
    hostname: 'https://g.252x.com'
  },
  logo: '/images/logo.svg',
  lang: 'en-US',
  title: 'GoogleDrive',
  description: 'Easy and secure access to your content',
  srcDir: 'src',
  srcExclude: ['tutorial/**/description.md'],

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/images/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { property: 'og:url', content: 'https://g.252x.com' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'GoogleDrive' }],
    [
      'meta',
      {
        property: 'og:description',
        content: 'GoogleDrive - Easy and secure access to your content'
      }
    ],
    [
      'meta',
      {
        property: 'og:image',
        content: '/images/logo.png'
      }
    ],
    ['meta', { name: 'twitter:site', content: '@vuejs' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    [
      'link',
      {
        rel: 'preconnect',
        href: 'https://f.543x.com'
      }
    ],
    [
      'script',
      {},
      fs.readFileSync(
        path.resolve(__dirname, './inlined-scripts/restorePreference.js'),
        'utf-8'
      )
    ],
    [
      'script',
      {},
      fs.readFileSync(
        path.resolve(__dirname, './inlined-scripts/uwu.js'),
        'utf-8'
      )
    ],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'XNOLWPLB',
        'data-spa': 'auto',
        defer: ''
      }
    ],
    [
      'script',
      {
        src: 'https://vueschool.io/banner.js?affiliate=vuejs&type=top',
        async: 'true'
      }
    ]
  ],

  themeConfig: {
    logo: '/images/logo.svg',
    siteTitle: 'GoogleDrive',
    nav,
    sidebar,
    // Placeholder of the i18n config for @vuejs-translations.
    // i18n,

    localeLinks: [
      {
        link: 'https://g.543x.com',
        text: '简体中文',
        repo: 'https://github.com/hyaliyun/GoogleDrive'
      },
      {
        link: '/translations/',
        text: 'Help Us Translate!',
        isTranslationsDesc: true
      }
    ],

    algolia: {
      indexName: 'vuejs',
      appId: 'ML0LEBN7FQ',
      apiKey: '21cf9df0734770a2448a9da64a700c22',
      searchParameters: {
        facetFilters: ['version:v3']
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hyaliyun/GoogleDrive/' },
    ],

    editLink: {
      repo: 'hyaliyun/GoogleDrive',
      text: 'Edit this page on GitHub'
    },

    footer: {
      license: {
        text: 'MIT License',
        link: 'https://www.543x.com'
      },
      copyright: `Copyright © 2014-${new Date().getFullYear()} GoogleDrive`
    }
  },

  markdown: {
    theme: 'github-dark',
    config(md) {
      md.use(headerPlugin)
      // .use(textAdPlugin)
    }
  },

  vite: {
    define: {
      __VUE_OPTIONS_API__: false
    },
    optimizeDeps: {
      include: ['gsap', 'dynamics.js'],
      exclude: ['@vue/repl']
    },
    // @ts-ignore
    ssr: {
      external: ['@vue/repl']
    },
    server: {
      host: true,
      fs: {
        // for when developing with locally linked theme
        allow: ['../..']
      }
    },
    build: {
      chunkSizeWarningLimit: Infinity
    },
    json: {
      stringify: true
    }
  },

  root: 'src',
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true
  }
});
