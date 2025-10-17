var relearn_searchindex = [
  {
    "breadcrumb": "xht \u003e Hugoes \u003e 写作",
    "content": "修改目录后需重新生成 content目录只是我们写作的目录，正式运行使用的是public目录下的文件夹。 修改content目录,hugo serve只是增量的生成，不会删除public下多余的内容。\nhugo serve --cleanDestinationDir serve： 可以编译content下的内容到public下（修改目录的话，只在public下增加新目录，废弃的目录名public下还有）\n–cleanDestinationDir： 每次重新生成时，先清空public下的内容",
    "description": "修改目录后需重新生成 content目录只是我们写作的目录，正式运行使用的是public目录下的文件夹。 修改content目录,hugo serve只是增量的生成，不会删除public下多余的内容。\nhugo serve --cleanDestinationDir serve： 可以编译content下的内容到public下（修改目录的话，只在public下增加新目录，废弃的目录名public下还有）\n–cleanDestinationDir： 每次重新生成时，先清空public下的内容",
    "tags": [],
    "title": "修改目录",
    "uri": "/quickstart/hugo/%E5%86%99%E4%BD%9C/%E7%9B%AE%E5%BD%95%E5%90%8D/index.html"
  },
  {
    "breadcrumb": "xht \u003e Hugoes",
    "content": "",
    "description": "",
    "tags": [],
    "title": "github部署",
    "uri": "/quickstart/hugo/github%E9%83%A8%E7%BD%B2/index.html"
  },
  {
    "breadcrumb": "xht \u003e Hugoes \u003e github部署",
    "content": "hugo.toml： baseUrl 要与github page访问网址对应：https://wsaaaqqq.github.io/quickstart\nbaseURL = 'https://wsaaaqqq.github.io/quickstart'",
    "description": "hugo.toml： baseUrl 要与github page访问网址对应：https://wsaaaqqq.github.io/quickstart\nbaseURL = 'https://wsaaaqqq.github.io/quickstart'",
    "tags": [],
    "title": "根路径问题",
    "uri": "/quickstart/hugo/github%E9%83%A8%E7%BD%B2/%E6%A0%B9%E8%B7%AF%E5%BE%84%E9%97%AE%E9%A2%98/index.html"
  },
  {
    "breadcrumb": "xht \u003e Hugoes \u003e 写作",
    "content": "项目根目录执行下载模板： git submodule add https://github.com/chipzoller/hugo-clarity themes/hugo-clarity /hugo.toml启用下载的模板: theme = 'hugo-theme-relearn'",
    "description": "项目根目录执行下载模板： git submodule add https://github.com/chipzoller/hugo-clarity themes/hugo-clarity /hugo.toml启用下载的模板: theme = 'hugo-theme-relearn'",
    "tags": [],
    "title": "模板",
    "uri": "/quickstart/hugo/%E5%86%99%E4%BD%9C/%E6%A8%A1%E6%9D%BF/index.html"
  },
  {
    "breadcrumb": "xht \u003e Hugoes \u003e github部署",
    "content": "开启github 提交自动部署 创建自动部署配置文件： .github/workflows/deploy.yml\nname: Deploy Hugo Site to Pages on: push: branches: [\"main\"] # 代码推送至 main 分支时触发 workflow_dispatch: # 支持手动触发 permissions: contents: read pages: write id-token: write concurrency: group: \"pages\" cancel-in-progress: false jobs: build: runs-on: ubuntu-latest steps: - name: Checkout code uses: actions/checkout@v4 with: submodules: recursive # 自动拉取主题子模块 fetch-depth: 0 - name: Setup Hugo uses: peaceiris/actions-hugo@v2 with: hugo-version: 'latest' # extended: true # 若主题需扩展版，取消注释 - name: Build with Hugo run: hugo --minify --gc # 生成优化后的静态文件 - name: Upload artifact uses: actions/upload-pages-artifact@v3 with: path: ./public # 上传生成的站点文件 deploy: environment: name: github-pages url: ${{ steps.deployment.outputs.page_url }} runs-on: ubuntu-latest needs: build steps: - name: Deploy to GitHub Pages id: deployment uses: actions/deploy-pages@v4",
    "description": "开启github 提交自动部署 创建自动部署配置文件： .github/workflows/deploy.yml\nname: Deploy Hugo Site to Pages on: push: branches: [\"main\"] # 代码推送至 main 分支时触发 workflow_dispatch: # 支持手动触发 permissions: contents: read pages: write id-token: write concurrency: group: \"pages\" cancel-in-progress: false jobs: build: runs-on: ubuntu-latest steps: - name: Checkout code uses: actions/checkout@v4 with: submodules: recursive # 自动拉取主题子模块 fetch-depth: 0 - name: Setup Hugo uses: peaceiris/actions-hugo@v2 with: hugo-version: 'latest' # extended: true # 若主题需扩展版，取消注释 - name: Build with Hugo run: hugo --minify --gc # 生成优化后的静态文件 - name: Upload artifact uses: actions/upload-pages-artifact@v3 with: path: ./public # 上传生成的站点文件 deploy: environment: name: github-pages url: ${{ steps.deployment.outputs.page_url }} runs-on: ubuntu-latest needs: build steps: - name: Deploy to GitHub Pages id: deployment uses: actions/deploy-pages@v4",
    "tags": [],
    "title": "自动部署",
    "uri": "/quickstart/hugo/github%E9%83%A8%E7%BD%B2/%E8%87%AA%E5%8A%A8%E9%83%A8%E7%BD%B2/index.html"
  },
  {
    "breadcrumb": "xht \u003e Hugoes",
    "content": "",
    "description": "",
    "tags": [],
    "title": "写作",
    "uri": "/quickstart/hugo/%E5%86%99%E4%BD%9C/index.html"
  },
  {
    "breadcrumb": "xht",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Hugoes",
    "uri": "/quickstart/hugo/index.html"
  },
  {
    "breadcrumb": "xht",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/quickstart/categories/index.html"
  },
  {
    "breadcrumb": "xht",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/quickstart/tags/index.html"
  }
]
