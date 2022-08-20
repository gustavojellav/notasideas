import BLOG from '@/blog.config'

module.exports = async (req, res) => {
  let { url } = req.query

  if (req.query && req.query.url) {
    url = req.query.url
  }

  const response = await fetch(url)
  const originResText = await response.text()
  const removeCraftText = originResText
    .replace('"https://www.craft.do"', '"/"') // Replace logo url
    .replace('?utm_source=CraftShare', '') // Replace logo url
    .replace('flex items-start group"', 'flex items-start group",style:{visibility:"hidden"}') // Hide Craft.do upper right corner logo
    .replace(
      /\("svg",\{className:e.className.*id:"white"\}\)\]\}\)\}\)\}\)/,
      '("img",{className:e.className,alt:"logo",src:"https://d2y5h3osumboay.cloudfront.net/7ej4m91hz0lcg5s1iqcspgys8izo"})'
    ) // Replace loading logo to favicon.svg

  let modifyResText
  if (BLOG.showTitlebarText) {
    modifyResText = removeCraftText
  } else {
    modifyResText = removeCraftText
      .replace(
        /className:"flex items-center justify-start flex-grow mr-2 overflow-hidden shrink"/g,
        'style:{display:"none"},className:"flex items-center justify-start flex-grow mr-2 overflow-hidden shrink"'
      ) // Hide title bar text
  }

  // don't show the "/b/*" and "/x/*" in the url
  // .replace('window.history.pushState({lukiNavIndex:c.length-1},w.breadcrumb,e.deepLinkUrl)', '""')
  res.setHeader('Content-Type', 'text/javascript; charset=utf-8')
  res.send(modifyResText)
}
