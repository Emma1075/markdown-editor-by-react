# 一个简单的 MarkDown 编辑器

## 涉及技术

脚手架使用 `create-react-app`

- react
- marked    => 用于解析 markedown 语法
- bootstrap     => 使用样式 

其中，bootstrap 的样式文件直接写在 `/public/index.html` 中

```html
 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
```

## 运行
```
cnpm i    // 安装依赖
npm start // 启动项目
```

## 运用 marked 解析

```js
import marked from 'marked'

let rowString = '# header';
let rowHtml = marked(rowString, {sanitize: true})

console.log(rowHtml);  // <h1>header</h1>
```

注： `senitize` 是一个布尔值，默认为 false，表示对输出进行过滤（清理）， 将忽略任何已经输入的 html 代码
本项目中应该设置为 true，不过滤。

## 涉及知识

`dangerouslySetInnerHTML`: `react.js` 提供的可以让我们设置动态元素的 `innerHTML`

语法：
```js
render() {
    return(
        <div className="editor" 
             dangerouslySetInnerHTML={{__html: '<h1>header</h1>'}}
        />
    )
}

// 最后的渲染结果就是一个 h1 标签
```