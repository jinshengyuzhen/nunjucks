# nunjucks
gulp-nunjucks-render的尝试

工程文件结构：

pages文件夹：存放待编译的.nunjucks，以及可能会引用到的模板页面片.html

nunjucks文件夹：存放输出编译后的结果页面.html

data.json：存放模板需要的数据，json格式

其中涉及到的模板：
{% block %}

{% extends %}

{% include %}

{% for %}

{% if %} {% elif %} {% else %}

{{ value }}
