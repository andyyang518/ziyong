var rule = {
    title:'掏爱撸',
    host:'https://www.taoilmv.cc',
    url:'/index.php/vodshow/fyclass--------fypage---.html',
    headers:{ 
        'User-Agent':'MOBILE_UA'
    },
    searchable:0,
    quickSearch:0,
    filterable: 0,
    timeout:5000,
    class_name:'国产&日本&欧美&动画&中字&传媒',
    class_url:'1&2&5&6&9&115',
    limit:6,
    play_parse:true,
	lazy:"js:var html=JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);var url=html.url;if(html.encrypt=='3'){url=base64Decode(url.slice(0,-5))}else if(html.encrypt=='2'){url=unescape(base64Decode(url))}if(/m3u8|mp4/.test(url)){input=url}else{input}",
    一级:'.stui-vodlist__item;a&&title;a&&data-original;.pic-text.text-right&&Text;a&&href',
    二级访问前:'MY_URL=/voddetail/.test(MY_URL)?MY_URL.replace("detail","play").replace(".html","-1-1.html"):MY_URL',
    二级:'*',
	
}
