function play() {

        var url = document.getElementById('url').value;
        url = url.replace("https://youtu.be/","https://www.youtube.com/embed/");
        console.log(url)
        url = url.replace("https://www.youtube.com/watch?v=","https://www.youtube.com/embed/");
        console.log(url)
        var iframe = document.getElementById('iframe');
        var src = document.createAttribute("src");
        src.value = url;
        iframe.setAttributeNode(src);
    }
