(self.webpackChunk_nextcloud_text=self.webpackChunk_nextcloud_text||[]).push([["highlight/kotlin-js-js","highlight/kotlin"],{65812:e=>{var n="[0-9](_*[0-9])*",a=`\\.(${n})`,i="[0-9a-fA-F](_*[0-9a-fA-F])*",s={className:"number",variants:[{begin:`(\\b(${n})((${a})|\\.)?|(${a}))[eE][+-]?(${n})[fFdD]?\\b`},{begin:`\\b(${n})((${a})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${a})[fFdD]?\\b`},{begin:`\\b(${n})[fFdD]\\b`},{begin:`\\b0[xX]((${i})\\.?|(${i})?\\.(${i}))[pP][+-]?(${n})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${i})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};e.exports=function(e){const n={keyword:"abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",built_in:"Byte Short Char Int Long Boolean Float Double Void Unit Nothing",literal:"true false null"},a={className:"symbol",begin:e.UNDERSCORE_IDENT_RE+"@"},i={className:"subst",begin:/\$\{/,end:/\}/,contains:[e.C_NUMBER_MODE]},t={className:"variable",begin:"\\$"+e.UNDERSCORE_IDENT_RE},l={className:"string",variants:[{begin:'"""',end:'"""(?=[^"])',contains:[t,i]},{begin:"'",end:"'",illegal:/\n/,contains:[e.BACKSLASH_ESCAPE]},{begin:'"',end:'"',illegal:/\n/,contains:[e.BACKSLASH_ESCAPE,t,i]}]};i.contains.push(l);const r={className:"meta",begin:"@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*"+e.UNDERSCORE_IDENT_RE+")?"},c={className:"meta",begin:"@"+e.UNDERSCORE_IDENT_RE,contains:[{begin:/\(/,end:/\)/,contains:[e.inherit(l,{className:"string"}),"self"]}]},o=s,b=e.COMMENT("/\\*","\\*/",{contains:[e.C_BLOCK_COMMENT_MODE]}),g={variants:[{className:"type",begin:e.UNDERSCORE_IDENT_RE},{begin:/\(/,end:/\)/,contains:[]}]},d=g;return d.variants[1].contains=[g],g.variants[1].contains=[d],{name:"Kotlin",aliases:["kt","kts"],keywords:n,contains:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"}]}),e.C_LINE_COMMENT_MODE,b,{className:"keyword",begin:/\b(break|continue|return|this)\b/,starts:{contains:[{className:"symbol",begin:/@\w+/}]}},a,r,c,{className:"function",beginKeywords:"fun",end:"[(]|$",returnBegin:!0,excludeEnd:!0,keywords:n,relevance:5,contains:[{begin:e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,contains:[e.UNDERSCORE_TITLE_MODE]},{className:"type",begin:/</,end:/>/,keywords:"reified",relevance:0},{className:"params",begin:/\(/,end:/\)/,endsParent:!0,keywords:n,relevance:0,contains:[{begin:/:/,end:/[=,\/]/,endsWithParent:!0,contains:[g,e.C_LINE_COMMENT_MODE,b],relevance:0},e.C_LINE_COMMENT_MODE,b,r,c,l,e.C_NUMBER_MODE]},b]},{begin:[/class|interface|trait/,/\s+/,e.UNDERSCORE_IDENT_RE],beginScope:{3:"title.class"},keywords:"class interface trait",end:/[:\{(]|$/,excludeEnd:!0,illegal:"extends implements",contains:[{beginKeywords:"public protected internal private constructor"},e.UNDERSCORE_TITLE_MODE,{className:"type",begin:/</,end:/>/,excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:/[,:]\s*/,end:/[<\(,){\s]|$/,excludeBegin:!0,returnEnd:!0},r,c]},l,{className:"meta",begin:"^#!/usr/bin/env",end:"$",illegal:"\n"},o]}}},15847:(e,n,a)=>{!function e(){e.warned||(e.warned=!0,console.log('Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/kotlin" instead of "highlight.js/lib/languages/kotlin.js"'))}(),e.exports=a(65812)}}]);
//# sourceMappingURL=kotlin-js-js.js.map?v=4ec25479ca32a257c54e