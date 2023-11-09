<template>
	<div class="container">
		<Category title="美食">
			<!-- 组件标签体内容里面的标签不知道往哪里放要用slot插槽指定 -->
			<img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="美食">
			<a slot="footer" href="http://baidu.com">更多美食</a>
		</Category>
		<Category title="游戏">
			<ul slot="center">
                <li v-for="(g,index) in games" :key="index">{{ g }}</li>
            </ul>
			<div class="foot" slot="footer">
				<a href="http://baidu.com">单机游戏</a>
				<a href="http://baidu.com">网络游戏</a>
			</div>
		</Category>
		<Category title="电影">
			<video slot="center" controls src="./assets/videos/video.mp4"></video>
			<!-- <div class="foot" slot="footer">
				<a href="http://baidu.com">经典</a>
				<a href="http://baidu.com">热门</a>
				<a href="http://baidu.com">推荐</a>
			</div>
			<h4 slot="footer">欢迎前来观影</h4> -->

			<!-- 使用template标签可以减少slot属性的使用，
					且可以不用增加多余div标签
					且具名可以写成v-slot:插槽名，其他的不能这样写并且不是等号
			-->

			<!-- <template slot="footer" > -->
			<template v-slot:footer >
				<div class="foot" slot="footer">
					<a href="http://baidu.com">经典</a>
					<a href="http://baidu.com">热门</a>
					<a href="http://baidu.com">推荐</a>
				</div>
				<h4>欢迎前来观影</h4>
			</template>
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
	.container,.foot{
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

	h4{
		text-align: center;
	}
</style>