<template>
	<div class="manage">
		<el-row class="tac" style="height: 100%;">
			<el-col :span="3" style="min-height: 100%; background-color: #324057;">
				<el-menu default-active="2" class="el-menu-vertical-demo" style="min-height: 100%;">
					<el-menu-item index="1">
						<i class="el-icon-menu"></i>
						<span slot="title">首页</span>
					</el-menu-item>
					<el-submenu index="2">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>用户管理</span>
						</template>				
						<el-menu-item index="2-1">用户列表</el-menu-item>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>商品管理</span>
						</template>				
						<el-menu-item index="2-1">商品分类</el-menu-item>
						<el-menu-item index="2-1">商品列表</el-menu-item>
					</el-submenu>
					<el-submenu index="4">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>订单管理</span>
						</template>				
						<el-menu-item index="2-1">订单列表</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
data () {
return {

}
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
