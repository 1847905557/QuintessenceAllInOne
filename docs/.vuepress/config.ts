import { defineUserConfig, defaultTheme } from 'vuepress';

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Quintessence All In One',
    description: '元素法典 - Quintessence All In One',
    base: '/QuintessenceAllInOne/',
    theme: defaultTheme({
        docsRepo: 'https://github.com/1847905557/QuintessenceAllInOne',
        docsBranch: 'main',
        docsDir: 'docs',
        editLinkPattern: ':repo/edit/:branch/:path',
        navbar: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: 'Github 项目',
                link: 'https://github.com/1847905557/QuintessenceAllInOne'
            },
        ],
        sidebar: [
            {
                text: '首页',
                link: '/',
            },
            {
              text: 'Stable Diffusion Web-UI',
              link: '/section-1-sd/',
              collapsible: true,
              children: [
                {
                    text: 'chapter 1 intro',
                    link: '/section-1-sd/chapter-1-intro/',
                    children: [],
                },
                {
                    text: 'chapter 2 prompt',
                    link: '/section-1-sd/chapter-2-prompt/',
                    children: [],
                },
                {
                    text: 'chapter 3 model',
                    link: '/section-1-sd/chapter-3-model/',
                    children: [],
                },
                {
                    text: 'chapter 4 training',
                    link: '/section-1-sd/chapter-4-training/',
                    children: [],
                },
                {
                    text: 'chapter 5 tip',
                    link: '/section-1-sd/chapter-5-tip/',
                    children: [],
                },
              ],
            },
            {
                text: 'GPT Model',
                link: '/section-2-gpt/',
                collapsible: true,
                children: [
                  {
                      text: 'chapter 1 intro',
                      link: '/section-2-gpt/chapter-1-intro/',
                      children: [],
                  },
                  {
                      text: 'chapter 2 basic',
                      link: '/section-2-gpt/chapter-2-basic/',
                      children: [],
                  },
                  {
                      text: 'chapter 3 personality',
                      link: '/section-2-gpt/chapter-3-personality/',
                      children: [],
                  },
                  {
                      text: 'chapter 4 creative',
                      link: '/section-2-gpt/chapter-4-creative/',
                      children: [],
                  },
                  {
                      text: 'chapter 5 deployment',
                      link: '/section-2-gpt/chapter-5-deployment/',
                      children: [],
                  },
                  {
                    text: 'chapter 6 tip',
                    link: '/section-2-gpt/chapter-6-tip/',
                    children: [],
                },
                ],
            },
            {
                text: 'AI Plus',
                link: '/section-3-aip/',
                collapsible: true,
                children: [
                  {
                      text: 'chapter 1 intro',
                      link: '/section-3-aip/chapter-1-intro/',
                      children: [],
                  },
                  {
                      text: 'chapter 2 photoshop',
                      link: '/section-3-aip/chapter-2-photoshop/',
                      children: [],
                  },
                  {
                      text: 'chapter 3 blender',
                      link: '/section-3-aip/chapter-3-blender/',
                      children: [],
                  },
                  {
                      text: 'chapter 4 bot',
                      link: '/section-3-aip/chapter-4-bot/',
                      children: [],
                  },
                  {
                      text: 'chapter 5 gptuber',
                      link: '/section-3-aip/chapter-5-gptuber/',
                      children: [],
                  },
                ],
            },
        ],
    })
});