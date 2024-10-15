### 路由文件约定

路由文件，一些404 和一些基础的配置页面

| 文件           | 支持的后缀           | 作用                             |
|--------------|-----------------|--------------------------------|
| layout	      | .js .jsx .tsx   | 	Layout, 这个是页面的布局，也就是整个面的框架布局， |
| page	        | .js .jsx .tsx   | 	Page 具体的页面内容                  |
| loading	     | .js .jsx .tsx   | 	Loading UI 加载中的页面             |
| not-found	   | .js .jsx .tsx	  | Not found UI 404 页面            |
| error	       | .js .jsx .tsx   | 	Error UI 错误页面？                |
| global-error | 	.js .jsx .tsx	 | Global error UI 全局错误           |
| route	       | .js .ts         | 	API endpoint ？                |
| template	    | .js .jsx .tsx	  | Re-rendered layout ？           |
| default	     | .js .jsx .tsx	  | Parallel route fallback page   |

### 路由




- Nested Routes  
folder	        Route segment  
folder/folder	Nested route segment  


- Dynamic Routes    
  - [folder]	        Dynamic route segment  这个表示动态路由，
    - [这里需要定义参数的名称]
    - 参数获取
      - page中定义 {params}: {params: {folder: string}} 
      - folder就表示我们需要获取的参数名称
      - 由于可能有多个参数，所以可以定义多个 folder的名字
        - 如 文件路径为：app/[p1]/[p2]/[p3]
        - page 参数定义 ：{params}: {params: {p1: string,p2:string,p3:string}}
        - 那么访问  app/p1_arg/p2_arg/p3_arg
        - 那么此时的 params.p1 = p1_args params.p2 = p2_args params.p3 = p3_args
  - [...folder]	        Catch-all route segment  
    - 获取路径上的所有参数，同时把 / 去掉了
  - [[...folder]]	    Optional catch-all route segment  


- Route Groups and Private Folders  

  - (folder)	            
    - Group routes without affecting routing, 
    - 这个表示将一批路由放到一起，但是本身(folder)不会再路由中有任何效果，也就不会在url中出现
    - 同时不允许出现两个相同的路由再不同的 (folder) 里面
      - 如 (folder_1)/p1 和 (folder_2)/p1 是不允许出现的
    - 他们之前的layout 也相互不会影响
  - _folder	                Opt folder and all child segments out of routing  
    - 可选择的路由方式, 应该就是将路由信息以路由的列表的方式传进去



- Parallel and Intercepted Routes  
  - @folder	            Named slot   
  - (.)folder	        Intercept same level   
  - (..)folder	        Intercept one level above   
  - (..)(..)folder	    Intercept two levels above   
  - (...)folder	        Intercept from root   
