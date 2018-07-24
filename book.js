module.exports = {
    title: '品高云应用支撑平台-开发平台',
    author: '广州市品高软件股份有限公司',
    language: 'zh-hans',
    copyright: "广州市品高软件股份有限公司 &nbsp;版权所有Copyright 2006-2018, All Rights Reserved",
    links:{
        'sidebar': {

        }        
    },
    plugins: [
        '-sharing',
        "fontsettings",
        'mermaid-gb3',
        "terminal",
        'back-to-top-button',
        "copy-code-button",
        "prism",
        "expandable-chapters",
        "heading-anchors"
    ],

    pluginsConfig: {
        "theme-default": {
            "showLevel": false
        }
    },

    styles: {
        website: 'exstyle.css'
    }
};