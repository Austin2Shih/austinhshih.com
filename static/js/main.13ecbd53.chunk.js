(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,n,t){e.exports=t(27)},,,,,,,,,function(e,n,t){},function(e,n,t){e.exports=t.p+"static/media/city-photo.570dc817.jpg"},function(e,n,t){e.exports=t.p+"static/media/hawaii-pic.38091706.jpg"},function(e,n,t){var a={"./TortlePoll.PNG":23,"./falling block game image.jpg":24,"./pancake-bot.PNG":25,"./ring-detection.png":26};function r(e){var n=o(e);return t(n)}function o(e){var n=a[e];if(!(n+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=22},function(e,n,t){e.exports=t.p+"static/media/TortlePoll.8a96058a.PNG"},function(e,n,t){e.exports=t.p+"static/media/falling block game image.fb0380e5.jpg"},function(e,n,t){e.exports=t.p+"static/media/pancake-bot.98e55277.PNG"},function(e,n,t){e.exports=t.p+"static/media/ring-detection.70fb1db9.png"},function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),o=t(5),i=t.n(o),l=(t(19),t(3)),c={tabletSize:"@media(max-width: 1024px)",phoneSize:"@media(max-width: 664px)"},s=t(6),m=function(e){var n=e.refs,t=Object(a.useState)(!1),o=Object(l.a)(t,2),i=o[0],m=o[1],d=Object(a.useState)("welcome"),u=Object(l.a)(d,2),p=u[0],f=u[1],g=Object(a.useCallback)(function(e){window.scrollTo({top:e.current.offsetTop,behavior:"smooth"})},[]),v=Object(a.useCallback)(function(){for(var e=n.length-1;e>=0;e--)if(n[e].ref.current&&window.pageYOffset+.3*window.innerHeight>=n[e].ref.current.offsetTop){f(n[e].name);break}},[n]);return Object(a.useEffect)(function(){return window.addEventListener("scroll",v),window.addEventListener("resize",v),function(){window.removeEventListener("scroll",v),window.removeEventListener("resize",v)}},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"toc-container"},r.a.createElement("div",{className:"menu-button",onClick:function(){m(!i)}},r.a.createElement(s.a,null)),n.map(function(e,n){return r.a.createElement("div",{key:n,className:"menu-item",onClick:function(){g(e.ref),m(!1)}},r.a.createElement("p",{className:"".concat(p===e.name?"toc-active":"")},e.name))})),r.a.createElement("style",null," ","\n        .toc-container {\n          display: flex;\n          flex-direction: column;\n          justify-content: flex-start;\n          position: fixed;\n          z-index: 1000;\n          top: var(--tocOffsetTop);\n          left: var(--tocOffsetLeft);\n          transition: all 0.5s ease;\n        }\n        .toc-container>div.menu-item {\n          display: flex;\n          position: relative;\n          cursor: pointer;\n          align-items: center;\n        }\n        .toc-container>div.menu-item>p {\n          position: relative;\n          padding-top: var(--tinySpacer);\n          padding-bottom: var(--tinySpacer);\n          color: var(--whiteButtonFill);\n\n        }\n        .toc-container>div.menu-item>p:hover, .toc-container>div>p.toc-active {\n          color: var(--textPrimary);\n        }\n        .menu-button {\n          display: none;\n          position: fixed;\n          top: var(--tocButtonTop);\n          left: var(--tocButtonLeft);\n          font-size: var(--fontButton);\n        }\n        .menu-button:hover {\n          transform: scale(1.1);\n        }\n        ".concat(c.tabletSize," {\n          .menu-button {\n            display: flex;\n          }\n          .toc-container {\n            top: 0;\n            left: ").concat(i?"0":"-100%",";\n\n            height: 100vh;\n            padding-top: var(--tocOffsetTop);\n            padding-left: var(--tocOffsetLeft);\n            padding-bottom: var(--tocOffsetTop);\n            padding-right: var(--tocOffsetLeft);\n            background-color: var(--tocBackground);\n          }\n        }\n      ")," "))},d=t(7),u=t(2),p=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"logo-container"},r.a.createElement("a",{style:{marginLeft:"var(--smallSpacer)"},href:"https://www.linkedin.com/in/austin-shih/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(u.b,null)),r.a.createElement("a",{href:"https://www.instagram.com/austin.shihh/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(u.e,null)),r.a.createElement("a",{href:"https://github.com/Austin2Shih",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(u.a,null)),r.a.createElement("a",{href:"mailto: austinhshih@gmail.com",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(u.f,null))),r.a.createElement("style",null," ","\n          .logo-container {\n            position: absolute;\n            display: flex;\n            flex-direction: row;\n            width: 100%;\n            max-width: var(--maxWidth);\n            bottom: 48px;\n            justify-content: center;\n          }\n          .logo-container>* {\n            font-size: 36px; \n            color: var(--slightlyTransparentBlue);\n            margin-right: var(--smallSpacer);\n          }\n      "," "))},f=r.a.forwardRef(function(e,n){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:n,className:"background-image"},r.a.createElement("div",{className:"container"},r.a.createElement("h3",{className:"welcome-text"},"WELCOME"),r.a.createElement("h1",{className:"welcome-name"},"I\u2019m Austin Shih."),r.a.createElement("h3",{className:"welcome-software-stack"},"Software Engineer | Full Stack"),r.a.createElement("button",{onClick:function(){window.scrollTo({top:e.aboutRef.current.offsetTop,behavior:"smooth"})},className:"continue-button"},r.a.createElement(d.a,null))),r.a.createElement(p,null)),r.a.createElement("style",null," ","\n          .background-image {\n            position: relative;\n            height: 100vh;\n            width: 100vw;\n            overflow: hidden;\n            background-image: url(".concat(t(20),");\n            background-size: cover;\n            background-position: bottom;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n          }\n          .container {\n            display: flex;\n            text-align: center;\n            justify-content: center;\n            align-items: center;\n            flex-direction: column;\n            max-width: var(--maxWidth);\n            margin-left: 24px;\n            margin-right: 24px;\n          }\n          .welcome-text {\n            color: var(--textTertiary);\n            font-family: 'Poppins';\n            font-weight: 700;\n            font-size: var(--fontHeader);\n            letter-spacing: 0.06em;\n          }\n          .welcome-name {\n            color: var(--textSecondary);\n            font-family: 'Poppins';\n            font-weight: 500;\n            font-size: var(--fontHuge);\n          }\n          .welcome-software-stack {\n            color: var(--textPrimary);\n            font-family: 'Poppins';\n            font-weight: 400;\n            font-size: var(--fontHeader);\n            margin-top: 8px;\n          }\n          .continue-button {\n            position: relative;\n            margin-top: 28px;\n            width: var(--continueButtonWidth);\n            height: var(--continueButtonWidth);\n            border-radius: var(--borderRadius);\n            border: solid 2px var(--textPrimary);\n            background-color: var(--whiteButtonFill);\n            color: var(--textPrimary);\n            font-size: 32px;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: center;\n            cursor: pointer;\n          }\n          .continue-button svg {\n            stroke-width: 0.4;\n            animation: MoveUpDown 1.3s linear infinite;\n            position: absolute;\n            bottom 6px;\n          }\n          @keyframes MoveUpDown {\n            0%, 100% {\n              bottom: 6px;\n            }\n            50% {\n              bottom: 14px;\n            }\n          }\n      ")," "))}),g={introText:"I\u2019m a Computer Science and Engineering major at UC Davis, interested in learning any new tech stack.",currentFocussees:"Recently, I\u2019ve been honing in on backend development and plan on learning a bit about DevOps."},v=Object(a.forwardRef)(function(e,n){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:n,className:"about-container"},r.a.createElement("h3",null,"ABOUT"),r.a.createElement("h4",{className:"intro-title"},"a quick introduction"),r.a.createElement("div",{className:"offset-container"},r.a.createElement("div",{className:"image-of-me"}),r.a.createElement("div",null,r.a.createElement("p",null,g.introText),r.a.createElement("h4",{className:"current-focusses"},"current focuses"),r.a.createElement("p",null,g.currentFocussees)))),r.a.createElement("style",null," ","\n      .about-container {\n        padding-top: var(--hugeSpacer);\n        padding-bottom: var(--hugeSpacer);\n        position: relative;\n        display: flex;\n        flex-direction: column;\n        max-width: var(--maxWidth);\n        align-self: center;\n      }\n      .intro-title {\n        text-align: center;\n      }\n      .offset-container {\n        margin-top: var(--smallSpacer);\n        display: flex;\n        flex-direction: row;\n        padding-left: var(--largeSpacer);\n        padding-right: var(--largeSpacer);\n        justify-content: center;\n        gap: var(--spacer);\n\n      }\n      ".concat(c.phoneSize," {\n        .offset-container {\n          flex-direction: column;\n          text-align: center;\n          justify-content: center;\n          align-items: center;\n          padding: 0;\n        }\n      }\n      .image-of-me {\n        min-width: 128px;\n        width: 128px;\n        height: 128px;\n        border-radius: 64px;\n        background-image: url(").concat(t(21),");\n        background-size: 164%;\n        background-position: 52% 8%;\n      }\n      .offset-container>div {\n        max-width: var(--aboutOffsetMaxWidth);\n      }\n      .current-focusses {\n        margin-top: var(--tinySpacer);\n        margin-bottom: var(--tinySpacer);\n      }\n      ")," "))}),h=[{company:"IGN",position:"Software Engineer Intern",timeFrame:"June 2022 - August 2022",description:["Developed feature for users to visualize their game activity with a Timeline of games they've played","Updated and created database tables with Knex.js","Wrote GraphQL schema changes and exhaustive unit tests for new database tables"]},{company:"#Include",position:"Backend developer",timeFrame:"September 2021 - Present",description:["Manage Content Management Systems to allow clients to easily update their website","Build custom endpoints in Next.js to allow front end easy access to our database handled with Strapi","Learning industry level web development practices with Express.js and React.js"]},{company:"Advantech",position:"IT Intern",timeFrame:"July 2021 - August 2021",description:["Improved the efficiency of the IT department by searching for creative ways to optimize and automate tasks with batch and powershell scripts","Developed automatic computer setup script saving 30 minutes per computer","Created system to automatically update computer information lists for 200+ employees","Utilized Python to generate scripts for updating DHCP"]}],x=[{school:"UC Davis",major:"Computer Science & Engineering",timeFrame:"September 2021 - Present"}],E=function(e){var n=e.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"work-container"},r.a.createElement("h4",{className:"work-header"},"".concat(n.company," "),r.a.createElement("span",{style:{color:"var(--textPrimary)"}},n.position)),r.a.createElement("div",{className:"work-right-shift",style:{marginLeft:"var(--largeSpacer)"}},r.a.createElement("h4",{style:{fontSize:"var(--fontSmallHeader)",margin:"4px 0px 4px 0px"}},n.timeFrame),r.a.createElement("ul",{style:{listStylePosition:"outside",paddingInlineStart:"1rem",margin:0}},n.description.map(function(e,n){return r.a.createElement("li",{key:n,className:"work-desc-item"},e)})))),r.a.createElement("style",null," ","\n        .work-container {\n          display: flex;\n          flex-direction: column;\n          justify-content: flex-start;\n          max-width: var(--experienceMaxWidth);\n        }\n        .work-header {\n            color: var(--textTertiary);\n            font-size: var(--fontMedium);\n        }\n        .work-desc-item {\n            padding-left: 0;\n            font-size: var(--fontSmall);\n            font-weight: 300;\n            margin-bottom: 4px;\n        }\n      "," "))},y=function(e){var n=e.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"education-container"},r.a.createElement("h4",{className:"education-header"},"".concat(n.school," "),r.a.createElement("span",{style:{color:"var(--textPrimary)"}},n.major)),r.a.createElement("h4",{style:{fontSize:"var(--fontSmallHeader)",margin:"4px 0px 4px 0px"}},n.timeFrame)),r.a.createElement("style",null," ","\n        .education-container {\n          display: flex;\n          flex-direction: column;\n          justify-content: flex-start;\n          max-width: var(--experienceMaxWidth);\n        }\n        .education-header {\n            color: var(--textTertiary);\n            font-size: var(--fontMedium);\n        }\n\n      "," "))},b=Object(a.forwardRef)(function(e,n){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:n,className:"experience-outer-container"},r.a.createElement("h3",{style:{marginBottom:"var(--smallSpacer)"}},"EXPERIENCE"),r.a.createElement("div",{className:"experience-container"},r.a.createElement("h4",{style:{fontWeight:700}},"work experience"),h.map(function(e,n){return r.a.createElement("div",{key:n},r.a.createElement(E,{data:e}),n!==h.length-1&&r.a.createElement("div",{className:"divider"}))}),r.a.createElement("h4",{style:{fontWeight:700,marginTop:"var(--largeSpacer)",marginBottom:"var(--tinySpacer)"}},"education"),x.map(function(e,n){return r.a.createElement("div",{key:n},r.a.createElement(y,{data:e}),n!==x.length-1&&r.a.createElement("div",{className:"divider"},"hello"))}),r.a.createElement("button",{className:"resume-button"},r.a.createElement("p",null,"resume"),r.a.createElement(u.c,null)))),r.a.createElement("style",null," ","\n      .experience-outer-container {\n        padding-top: var(--largerSpacer);\n        padding-bottom: var(--largerSpacer);\n        position: relative;\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        justify-content: center;\n        background-color: var(--backgroundSecondary);\n      }\n      .experience-container {\n        position: relative;\n        display: flex;\n        flex-direction: column;\n        max-width: calc(var(--maxWidth) - var(--experienceLeftShift));\n        padding-left: var(--experienceLeftShift);\n        align-self: center;\n      }\n      ".concat(c.phoneSize," {\n        .experience-container {\n          padding-left: 0px;\n        }\n      }\n      .divider {\n        height: 0px\n        width: 100%;\n        border-bottom: solid 1px var(--textSecondary);\n        margin: var(--smallSpacer) 0 var(--smallSpacer) 0;\n      }\n      .resume-button {\n        height: 40px;\n        border-radius: var(--borderRadius);\n        border: solid 2px var(--backgroundPrimary);\n        background-color: var(--blurpleButtonFill);\n        margin-top: var(--largerSpacer);\n        margin-bottom: var(--largeSpacer);\n        color: var(--textSecondary);\n        font-size: var(--fontButton);\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        text-align: center;\n        align-items: center;\n      }\n      .resume-button>p {\n        color: var(--textSecondary);\n        font-size: var(--fontHeader);\n        margin-right: var(--tinierSpacer);\n      }\n      ")," "))}),w=[{title:"TortlePoll - Live polling website",shortDesc:"Live polling site similar to StrawPoll developed with Next.js.",points:["Enjoy live poll results","Filter results by demographic group","Browse and take public polls","Keep track of polls you've created and voted for in your dashboard"],imageFileName:"TortlePoll.PNG",projectLink:"https://github.com/Austin2Shih/TortlePoll-Live-polling-website"},{title:"Ring Detection OpenCV - First Tech Challenge",shortDesc:"THE 2020-2021 FIRST TECH CHALLENGE REQUIRED A COMPUTER VISION ALGORITHM TO COUNT STACKS OF ORANGE RINGS",points:["Developed regression model for algorithm to adapt to different lighting conditions.","Created algorithm to determine the location of rings accurate to an inch.","Leveraged OpenCV's image processing functions to filter and refine images to get accurate results."],imageFileName:"ring-detection.png",projectLink:"https://github.com/Future14473/Ultimate-Road-Runner/tree/dev/TeamCode/src/main/java/org/firstinspires/ftc/teamcode/ComputerVision"},{title:"Pancakebot-bot",shortDesc:"Python script that reads discord pancake-bot messages and answers trivia questions",points:["Built Python script to answer Trivia questions provided by Discord's Pancakebot.","Leveraged Google's Tesseract OCR to pull information from screenshots of Discord.","Used the OpenTrivia API to gather Trivia questions and form a local database of solutions.","Developed sophisticated algorithm to filter out Pancakebot's Discord messages and interpret them accounting for the OCR's inaccuracies."],imageFileName:"pancake-bot.PNG",projectLink:"https://github.com/Austin2Shih/Pancakebot-bot"}],S=function(e){var n=e.data,o=Object(a.useState)(!1),i=Object(l.a)(o,2),s=i[0],m=i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"project-container"},r.a.createElement("h4",{style:{color:"var(--textPrimary)",fontSize:"var(--fontMedium)"}},n.title),r.a.createElement("div",{className:"inner-container"},r.a.createElement("div",{className:"project-text-container",style:{width:"var(--projectTextPercentage)"}},r.a.createElement("h3",{style:{textTransform:"uppercase",textAlign:"left"}},n.shortDesc),r.a.createElement("ul",{style:{listStylePosition:"outside",paddingInlineStart:"1rem",margin:0}},n.points.map(function(e,n){return r.a.createElement("li",{key:n,className:"project-point-item"},e)}))),r.a.createElement("a",{href:n.projectLink,target:"_blank",rel:"noopener noreferrer",className:"project-image-container",style:{width:"var(--projectImagePercentage)"},onMouseEnter:function(){m(!0)},onMouseLeave:function(){m(!1)}},r.a.createElement("img",{className:s?"hovered":"",src:t(22)("./".concat(n.imageFileName))}),r.a.createElement("div",{className:"learn-more-button ".concat(s?"hovered":"")},r.a.createElement("p",null,"learn more"),r.a.createElement(u.d,null))))),r.a.createElement("style",null," ","\n        .project-container {\n          display: flex;\n          flex-direction: column;\n          text-align: left;\n          justify-content: flex-start;\n          width: var(--maxWidth);\n        }\n        .inner-container {\n          position: relative;\n          display: flex;\n          flex-direction: row;\n          gap: var(--tinySpacer);\n          border: solid 2px var(--textSecondary);\n          border-radius: var(--borderRadius);\n          padding: var(--tinySpacer);\n        }\n        ".concat(c.phoneSize," {\n          .inner-container {\n            flex-direction: column;\n          }\n          .project-text-container {\n            width: 100%;\n          }\n        }\n        .project-text-container {\n          display: flex;\n          flex-direction: column;\n        }\n        .project-point-item {\n          padding-left: 0;\n          font-size: var(--fontSmall);\n          font-weight: 300;\n          margin-bottom: 4px;\n        }\n        .project-image-container {\n          position: relative;\n          cursor: pointer;\n\n        }\n        .project-image-container>img {\n          border-radius: var(--borderRadius);\n          object-fit: cover;\n          width: 100%;\n          height: 100%;\n        }\n        .project-image-container>img.hovered {\n          opacity: 0.1;\n        }\n        .learn-more-button, learn-more-button:hover, learn-more-button:focus, learn-more-button:active {\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          transform: translate(-50%, -50%);\n\n          display: none;\n          flex-direction: row;\n          justify-content: center;\n          text-align: center;\n          align-items: center;\n\n          font-size: var(--fontHeader);\n          text-decoration: none;\n          color: var(--textPrimary);\n        }\n        .learn-more-button.hovered {\n          display: flex;\n        }\n        .learn-more-button>p {\n          color: var(--textSecondary);\n          font-size: var(--fontHeader);\n          margin-right: var(--tinierSpacer);\n        }\n\n      ")," "))},k=Object(a.forwardRef)(function(e,n){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:n,className:"portfolio-container"},r.a.createElement("h3",null,"PORTFOLIO"),r.a.createElement("h4",{style:{marginBottom:"var(--spacer)"}},"some of my projects"),r.a.createElement("div",{className:"projects-container"},w.map(function(e,n){return r.a.createElement(S,{key:n,data:e})}))),r.a.createElement("style",null," ","\n      .portfolio-container {\n        padding-top: var(--largerSpacer);\n        padding-bottom: var(--largerSpacer);\n        position: relative;\n        display: flex;\n        flex-direction: column;\n        max-width: var(--maxWidth);\n        align-self: center;\n        text-align: center;\n        padding-left: var(--outerPadding);\n        padding-right: var(--outerPadding);\n      }\n      .projects-container {\n        display: flex;\n        flex-direction: column;\n        gap: var(--spacer);\n      }\n      "," "))}),j={frameworks:["React.js","Next.js","Express.js","Unity","PostgreSQL","Knex.js"],codingLanguages:["Python","Java","C","C#","C++","JavaScript","SQL","HTML","CSS"],languages:["English","Mandarin Chinese"]},N=function(e){var n=e.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"skills-list-container"},n.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("p",null,e),t!==n.length-1&&r.a.createElement("p",{style:{margin:"0 var(--tiniestSpacer) 0 var(--tiniestSpacer)"}},"\u2022"))})),r.a.createElement("style",null," ","\n    .skills-list-container {\n      display: flex;\n      flex-direction: row;\n      flex-wrap: wrap;\n      align-self: center;\n      max-width: var(--skillsMaxWidth);\n      justify-content: center;\n      margin-top: var(--tinySpacer);\n      margin-bottom: var(--spacer);\n    }\n    .skills-list-container>div {\n      display: flex;\n      flex-direction: row;\n      padding-bottom: var(--tiniestSpacer);\n    }\n    "," "))},O=Object(a.forwardRef)(function(e,n){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:n,className:"skills-outer-container"},r.a.createElement("h3",{style:{marginBottom:"var(--smallSpacer)"}},"SKILLS"),r.a.createElement("h4",null,"frameworks & technologies"),r.a.createElement(N,{data:j.frameworks}),r.a.createElement("h4",null,"coding languages"),r.a.createElement(N,{data:j.codingLanguages}),r.a.createElement("h4",null,"spoken languages"),r.a.createElement(N,{data:j.languages})),r.a.createElement("style",null," ","\n      .skills-outer-container {\n        padding-top: var(--largerSpacer);\n        padding-bottom: var(--largerSpacer);\n        position: relative;\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        justify-content: center;\n        text-align: center;\n        background-color: var(--backgroundSecondary);\n      }\n      .skills-outer-container>h4 {\n        font-weight: 700;\n      }\n      "," "))}),T={location:"San Francisco Bay Area",email:"austinhshih@gmail.com",phone:"(510) 737-3634"},P=t(8),L=t(9),F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"logo-container"},r.a.createElement("a",{style:{marginLeft:"var(--smallSpacer)"},href:"https://www.linkedin.com/in/austin-shih/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(u.b,null)),r.a.createElement("a",{href:"https://www.instagram.com/austin.shihh/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(u.e,null)),r.a.createElement("a",{href:"https://github.com/Austin2Shih",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(u.a,null))),r.a.createElement("style",null," ","\n          .logo-container {\n            position: absolute;\n            display: flex;\n            flex-direction: row;\n            width: 100%;\n            max-width: var(--maxWidth);\n            bottom: var(--largerSpacer);\n            justify-content: center;\n          }\n          .logo-container>* {\n            font-size: var(--fontButton); \n            color: var(--textSecondary);\n            margin-right: var(--smallSpacer);\n          }\n      "," "))},R=Object(a.forwardRef)(function(e,n){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:n,className:"contact-container"},r.a.createElement("h3",null,"CONTACT"),r.a.createElement("div",{className:"contact-large-icons"},r.a.createElement("div",null,r.a.createElement("p",{className:"contact-large-icon"},r.a.createElement(P.a,null)),r.a.createElement("h3",null,"WHERE TO FIND ME"),r.a.createElement("p",null,T.location)),r.a.createElement("div",null,r.a.createElement("p",{className:"contact-large-icon"},r.a.createElement(u.f,null)),r.a.createElement("h3",null,"EMAIL ME AT"),r.a.createElement("a",{className:"contact-link",href:"mailto: austinhshih@gmail.com"},r.a.createElement("p",null,T.email))),r.a.createElement("div",null,r.a.createElement("p",{className:"contact-large-icon"},r.a.createElement(L.a,null)),r.a.createElement("h3",null,"CALL ME AT"),r.a.createElement("a",{className:"contact-link",href:"tel:+15107373634"},r.a.createElement("p",null,T.phone)))),r.a.createElement(F,null)),r.a.createElement("style",null," ","\n      .contact-container {\n        padding-top: var(--largerSpacer);\n        padding-bottom: var(--hugeSpacer);\n        position: relative;\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        max-width: var(--maxWidth);\n        align-self: center;\n        align-items: center;\n        gap: var(--tinySpacer);\n        height: 55vh;\n      }\n      .contact-large-icons {\n        display: flex;\n        flex-direction: row;\n        width: 100%;\n        justify-content: space-evenly;\n      }\n      ".concat(c.phoneSize," {\n        .contact-large-icons {\n          align-items: center;\n          flex-direction: column;\n          gap: var(--spacer);\n        }\n      }\n      .contact-large-icons>div {\n        display: flex;\n        flex-direction: column;\n        text-align: center;\n        width: 200px;\n      }\n      .contact-large-icon {\n        font-size: var(--fontHuge);\n        color: var(--textSecondary);\n      }\n      .contact-link {\n        color: var(--textPrimary);\n      }\n      ")," "))}),C=function(){var e=Object(a.useRef)(null),n=Object(a.useRef)(null),t=Object(a.useRef)(null),o=Object(a.useRef)(null),i=Object(a.useRef)(null),l=Object(a.useRef)(null),c=[{ref:e,name:"welcome"},{ref:n,name:"about"},{ref:t,name:"experience"},{ref:o,name:"portfolio"},{ref:i,name:"skills"},{ref:l,name:"contact"}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{refs:c}),r.a.createElement("div",{className:"outer-container"},r.a.createElement(f,{aboutRef:n,ref:e}),r.a.createElement(v,{ref:n}),r.a.createElement(b,{ref:t}),r.a.createElement(k,{ref:o}),r.a.createElement(O,{ref:i}),r.a.createElement(R,{ref:l})),r.a.createElement("style",null," ","\n        .outer-container {\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n        }\n      "," "))};var z=function(){return r.a.createElement(C,null)};i.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)))}],[[10,1,2]]]);
//# sourceMappingURL=main.13ecbd53.chunk.js.map