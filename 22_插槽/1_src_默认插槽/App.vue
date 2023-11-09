<template>
	<div class="container">
		<Category title="美食">
			<!-- 组件标签体内容里面的标签不知道往哪里放要用slot插槽指定 -->
			<img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="美食">
		</Category>
		<Category title="游戏" :listData="games">
			<ul>
                <li v-for="(g,index) in games" :key="index">{{ g }}</li>
            </ul>
		</Category>
		<Category title="电影">
			<video controls src="./assets/videos/video.mp4"></video>
		</Category>
	</div>
</template>

<script>
	import Category from './components/Category'

	export default {
		name:'App',
		components:{Category},
		data(){
			return {
				foods:['火锅','烧烤','小龙虾','牛排'],
				games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
				films:['《教父》','《拆弹专家》','《你好，李焕英》','《绿皮书》']
			}
		}
		
	}
</script>

<style>
	.container{
		display: flex;
		justify-content: space-around;
	}

	img{
        width: 100%;
    }
/* slot里面的样式写在哪里都可以：
	组件里面：是解析的时候加样式，在插入到slot里面
	slot里面：是在组件里面解析的时候没有样式，插入到slot里面后，在加的样式
*/
    video{
        width: 100%;
    }
</style>