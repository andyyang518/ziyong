var rule = {
    title:'麻豆映画',
    host:'https://www.madoupj.com',
    url:'/index.php/&m=vodtype/fyclass/page/fypage.html',
    headers:{ 
        'User-Agent':'MOBILE_UA'
    },
    searchable:0,
    quickSearch:0,
    filterable: 0,
    timeout:5000,
    class_name:'麻豆原创&原创伙伴&节目企划&免费视频区',
    class_url:'mdapp1&mdapp2&mdapp3&mdapp72',
    limit:6,
    play_parse:true,
	lazy:"js:var html=JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);var url=html.url;if(html.encrypt=='3'){url=base64Decode(url.slice(0,-5))}else if(html.encrypt=='2'){url=unescape(base64Decode(url))}if(/m3u8|mp4/.test(url)){input=url}else{input}",
    一级:'.col-sm-4 .archives-posts;a&&title;img&&src;img&&alt;a&&href',
    二级访问前:'MY_URL=/m=voddetail/.test(MY_URL)?MY_URL.replace("detail","play").replace(".html","-1-1.html"):MY_URL',
    二级:'*',
	
}
