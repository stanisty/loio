import{n as e}from"./chunk-DnJy8xQt.js";import{S as t}from"./iframe-CKI39TZl.js";import{t as n}from"./jsx-runtime-BGU0mfus.js";import{a as r,c as i,i as a,n as o,o as s,r as c,t as l}from"./utils-9hew9tpO.js";function u({className:e,variant:t,size:n,visualState:r,loading:i,disabled:a,children:o,...c}){let u=a||r===`disabled`||i,p=i?`loading`:r;return(0,d.jsxs)(`button`,{"data-state":p??`default`,className:l(f({variant:t,size:n,visualState:p,className:e})),disabled:u,...c,children:[i?(0,d.jsx)(s,{className:`h-4 w-4 animate-spin`}):null,o]})}var d,f,p=e((()=>{t(),a(),r(),o(),d=n(),f=c(`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius)] text-[14px] leading-5 font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)] disabled:pointer-events-none`,{variants:{variant:{default:`bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary-hover)]`,secondary:`bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:bg-[var(--secondary-hover)]`,destructive:`bg-[var(--destructive)] text-[var(--destructive-foreground)] hover:brightness-95`,outline:`border border-[var(--border)] bg-white text-[var(--foreground)] hover:bg-[var(--secondary)]`,ghost:`bg-white text-[var(--foreground)] hover:bg-[var(--ghost-hover)]`},size:{default:`h-9 px-4 py-2`,lg:`h-11 px-6 py-2.5`,sm:`h-8 px-3`,xs:`h-6 px-3 text-xs leading-4`,icon:`h-9 w-9 p-0`,"icon-lg":`h-11 w-11 p-0`,"icon-sm":`h-8 w-8 p-0`,"icon-xs":`h-6 w-6 p-0`},visualState:{default:``,loading:`cursor-wait`,disabled:`opacity-50`,hover:``,focus:``}},compoundVariants:[{visualState:`hover`,variant:`ghost`,className:`bg-[var(--ghost-hover)]`},{visualState:`hover`,variant:`default`,className:`bg-[var(--primary-hover)]`},{visualState:`hover`,variant:`secondary`,className:`bg-[var(--secondary-hover)]`},{visualState:`focus`,className:`ring-2 ring-[var(--ring)] ring-offset-2 ring-offset-[var(--ring-offset)]`}],defaultVariants:{variant:`default`,size:`default`,visualState:`default`}}),u.__docgenInfo={description:``,methods:[],displayName:`Button`,props:{asChild:{required:!1,tsType:{name:`boolean`},description:``},loading:{required:!1,tsType:{name:`boolean`},description:``}},composes:[`VariantProps`]}})),m,h,g,_,v,y;e((()=>{r(),p(),m=n(),h={title:`Design System/Button`,component:u,parameters:{layout:`centered`},args:{children:`Button`,variant:`default`,size:`default`,visualState:`default`},argTypes:{variant:{control:`select`,options:[`default`,`secondary`,`destructive`,`outline`,`ghost`]},size:{control:`select`,options:[`xs`,`sm`,`default`,`lg`,`icon-xs`,`icon-sm`,`icon`,`icon-lg`]},visualState:{control:`select`,options:[`default`,`hover`,`focus`,`loading`,`disabled`]}}},g={},_={render:()=>{let e=[`default`,`secondary`,`outline`,`destructive`,`ghost`],t=[`default`,`hover`,`focus`,`loading`,`disabled`];return(0,m.jsx)(`div`,{className:`grid gap-8`,children:e.map(e=>(0,m.jsxs)(`div`,{className:`grid gap-3`,children:[(0,m.jsx)(`p`,{className:`text-sm font-semibold capitalize`,children:e}),(0,m.jsx)(`div`,{className:`flex flex-wrap gap-3`,children:t.map(t=>(0,m.jsx)(u,{variant:e,visualState:t,children:t},`${e}-${t}`))})]},e))})}},v={render:()=>(0,m.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,m.jsx)(u,{size:`icon-xs`,"aria-label":`Icon xs`,children:(0,m.jsx)(i,{className:`h-3 w-3`})}),(0,m.jsx)(u,{size:`icon-sm`,"aria-label":`Icon sm`,children:(0,m.jsx)(i,{className:`h-3.5 w-3.5`})}),(0,m.jsx)(u,{size:`icon`,"aria-label":`Icon default`,children:(0,m.jsx)(i,{className:`h-4 w-4`})}),(0,m.jsx)(u,{size:`icon-lg`,"aria-label":`Icon lg`,children:(0,m.jsx)(i,{className:`h-5 w-5`})})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const variants = ['default', 'secondary', 'outline', 'destructive', 'ghost'] as const;
    const states = ['default', 'hover', 'focus', 'loading', 'disabled'] as const;
    return <div className="grid gap-8">
        {variants.map(variant => <div key={variant} className="grid gap-3">
            <p className="text-sm font-semibold capitalize">{variant}</p>
            <div className="flex flex-wrap gap-3">
              {states.map(visualState => <Button key={\`\${variant}-\${visualState}\`} variant={variant} visualState={visualState}>
                  {visualState}
                </Button>)}
            </div>
          </div>)}
      </div>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Button size="icon-xs" aria-label="Icon xs">
        <ArrowUpRight className="h-3 w-3" />
      </Button>
      <Button size="icon-sm" aria-label="Icon sm">
        <ArrowUpRight className="h-3.5 w-3.5" />
      </Button>
      <Button size="icon" aria-label="Icon default">
        <ArrowUpRight className="h-4 w-4" />
      </Button>
      <Button size="icon-lg" aria-label="Icon lg">
        <ArrowUpRight className="h-5 w-5" />
      </Button>
    </div>
}`,...v.parameters?.docs?.source}}},y=[`Playground`,`Matrix`,`IconSizes`]}))();export{v as IconSizes,_ as Matrix,g as Playground,y as __namedExportsOrder,h as default};