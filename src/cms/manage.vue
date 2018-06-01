<template>
	<el-container>
		<el-header>Header</el-header>
		<el-container>
			<el-aside width="200px">
				<el-row>
					<el-col>
						<el-menu :default-active="locationUrl" router>
							<el-menu-item index="manage"><i class="el-icon-menu"></i><span>首页</span></el-menu-item>
							<el-submenu index="2">
								<template slot="title"><i class="el-icon-document"></i><span>用户管理</span></template>
								<el-menu-item index="userList">用户列表</el-menu-item>
								<el-menu-item index="userCategory">用户分类</el-menu-item>
							</el-submenu>
						</el-menu>
					</el-col>
				</el-row>
			</el-aside>
			<el-main>
				<keep-alive>
				    <router-view></router-view>
				</keep-alive>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
export default {
	computed: {
		locationUrl:function() {
			return this.$route.path.replace('/', '');
		}
	}
}
</script>

<style>

</style>
