<template>
    <div class="row">
        <!-- 展示用户列表 -->
        <div v-show="info.users.length" class="card" v-for="user in info.users" :key="user.login">
            <a :href="user.html_url" target="_blank">
            <img :src="user.avatar_url" style='width: 100px'/>
            </a>
            <p class="card-text">{{ user.login }}</p>
        </div>
        <!-- 展示欢迎词 -->
        <h1 v-show="info.isFirst">欢迎使用！</h1>
        <!-- 展示加载中 -->
        <h1 v-show="info.isLoading">加载中...</h1>
        <!-- 展示错误信息 -->
        <h1 v-show="info.errMsg">{{ info.errMsg }}</h1>
    </div>
</template>

<script>
export default {
    name:'List',
    data(){
        return {
        //     isFirst:true,
        //     isLoading:false,
        //     errMsg:'',
        //     users:[],
        info:{
            isFirst:true,
            isLoading:false,
            errMsg:'',
            users:[],
        }
        }
    },
    mounted(){
        this.$bus.$on('updateListData',(dataObj) => {
            console.log('我是List组件,收到了数据')
            // this.isFirst = isFirst
            // this.isLoading = isLoading
            // this.errMsg = errMsg
            // this.users = users

            // 优化
            console.log(dataObj)
            // this.isFirst = dataObj.isFirst
            // this.info = dataObj
            // 防止isFalse丢失
            // ...对象：是对象展开操作符
            // {obj,obj}：对象合并操作符,会覆盖第一个对象的属性，没有的会保留
            this.info = {...this.info,...dataObj}
        })
    }

}
</script>

<style scope>
    .album {
        min-height: 50rem; /* Can be removed; just added for demo purposes */
        padding-top: 3rem;
        padding-bottom: 3rem;
        background-color: #f7f7f7;
	}

	.card {
        float: left;
        width: 33.333%;
        padding: .75rem;
        margin-bottom: 2rem;
        border: 1px solid #efefef;
        text-align: center;
	}

	.card > img {
        margin-bottom: .75rem;
        border-radius: 100px;
	}

	.card-text {
	    font-size: 85%;
	}
</style>