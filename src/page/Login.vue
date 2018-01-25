<template>
<div class="login">
    <!-- 滚动（替换为 java 组件） 开始 -->
	<div class="c_scroll c_scroll-float m_login">
		<div class="logo">
			<img src="../assets/TouchUI/content/img/logo.png" alt="" />
		</div>
		<!-- 表单 开始 -->
		<div class="form">
			<ul>
				<li>
					<span class="e_ico-user"></span>
					<input placeholder="NT账号" type="text" v-model="userId"/>
				</li>
				<li>
					<span class="e_ico-pwd"></span>
					<input placeholder="密码" type="password" v-model="pass" ref="pass"/>
				</li>
			</ul>
			<div class="l_padding red" style="color:red">{{msg}}</div>
		</div>
		<!-- 表单 结束 -->
		<!-- 分列 开始 -->
		<div class="l_col">
			<div class="l_colItem">
				<input type="checkbox" class="e_checkbox"  checked="checked" id="UI_automatic"/><span class="e_space"></span><label for="UI_automatic">自动登录</label>
			</div>
			<div class="l_colItem e_right">
				<input type="checkbox" class="e_checkbox"  id="UI_show" @click="showPass"/><span class="e_space"></span><label for="UI_show">显示密码</label>
			</div>
		</div>
		<!-- 分列 结束 -->
		<!-- 提交 开始 -->
		<div class="c_submit c_submit-full submit">
            <button type="button" class="e_button-purple" @click="login()">登 录</button>
	    </div>
	</div>
<!-- 提交 结束 -->
</div>
</template>

<script>
/**
 * 列表页
 * xiams 20180123
 */
import login from '../api/Login/login'
/* eslint-disable */
export default {
	data() {
		return {
			isShowPass: true,
			password: null,
			test: 'test',
			msg: '', // 登录状态消息
			userId: null,
			pass: null
		}
	},
	methods: {
		login() {
			login.login('72012',123456).then((res) => {
			// login.login(this.userId,this.pass).then((res) => {
				this.msg = '正在登录'
				this.userId = null;
				this.pass = null;
				console.info(res)
				if(res.status == '200'){
					this.msg = '登录成功'
					this.$router.push({path:'home'})
				} else {
					this.msg = '登录失败'
				}
			})
		},
		showPass() {
			this.$refs.pass.type = (this.$refs.pass.type == 'password'? 'test' : 'password')
		}
	}
}
</script>

<style lang="scss" scoped>
	@import  "../assets/TouchUI/content/css/login";
</style>
