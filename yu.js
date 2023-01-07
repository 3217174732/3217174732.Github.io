const link = document.createElement("a")
link.href = `https://www.baidu.com`
link.target = "_blank"
document.body.appendChild(link)
link.click()
document.body.removeChild(link)
