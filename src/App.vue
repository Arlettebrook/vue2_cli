<template>
	<div class="container">
		<Category title="游戏">
			<!-- 使用template标签拿插槽里面的数据games -->
			<template scope="baidu">
				<!-- {{ baidu.games }} -->
				<ul>
					<li v-for="(g,index) in baidu.games" :key="index">{{ g }}</li>
				</ul>
			</template>
		</Category>

		<Category title="游戏">
			<!-- <template scope="baidu"> -->
				<!-- {{ baidu.games }} -->
				<!-- <ol> -->
					<!-- <li style="color:red" v-for="(g,index) in baidu.games" :key="index">{{ g }}</li> -->
				<!-- </ol> -->
				<!-- <h4>{{ baidu.msg }}</h4> -->
			<!-- </template> -->

			<!-- 结构赋值 -->
			<template scope="{games,msg}">
				<!-- {{ baidu.games }} -->
				<ol>
					<li style="color:red" v-for="(g,index) in games" :key="index">{{ g }}</li>
				</ol>
				<h4>{{ msg }}</h4>
			</template>
		</Category>

		<Category title="游戏">
			<!-- <template scope="baidu"> -->
				<!-- 结构赋值 -->
			<!-- <template scope="{games}"> -->
				<!-- 或者 -->
			<template slot-scope="{games}">
				<!-- {{ baidu.games }} -->
				<h4 
					v-for="(g,index) in games" :key="index">
					{{ g }}
				</h4>
			</template>
		</Category>
		
	</div>
</template>

<script>
	import Category from './components/Category'

	export default {
		name:'App',
		components:{Category},
		
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