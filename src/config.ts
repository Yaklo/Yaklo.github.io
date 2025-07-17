import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "虚之亚克洛·Yaklo",
	subtitle: "天晴了，雨停了，你又觉得你行了（指西片",
	lang: "zh_CN", // 语言设置: 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
	themeColor: {
		hue: 250, // 主题色默认色调，取值范围0-360。例如红色:0，蓝绿色:200，青色:250，粉色:345
		fixed: false, // 对访客隐藏主题色选择器
	},
	banner: {
		enable: false,
		src: "assets/images/demo-banner.png", // 图片路径，相对于/src目录。若以'/'开头则相对于/public目录
		position: "center", // 等同于object-position属性，仅支持'top','center','bottom'，默认为'center'
		credit: {
			enable: false, // 是否显示横幅图片的版权信息
			text: "", // 显示的版权文字
			url: "", // (可选) 原作品或艺术家页面的URL链接
		},
	},
	toc: {
		enable: true, // 在文章右侧显示目录
		depth: 2, // 目录中显示的最大标题层级，取值范围1-3
	},
	favicon: [
		// 保留空数组则使用默认favicon
		// {
		//   src: '/favicon/icon.png',    // favicon路径，相对于/public目录
		//   theme: 'light',              // (可选) 'light'或'dark'，仅在为浅色/深色模式设置不同favicon时使用
		//   sizes: '32x32',              // (可选) favicon尺寸，仅在设置不同尺寸的favicon时使用
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/saicaca/fuwari", // 内部链接不应包含基础路径，会自动添加
			external: true, // 显示外部链接图标，将在新标签页打开
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/demo-avatar.png", // 头像路径，相对于/src目录。若以'/'开头则相对于/public目录
	name: "Lorem Ipsum",
	bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	links: [
		{
			name: "Twitter",
			icon: "fa6-brands:twitter", // 图标代码请访问 https://icones.js.org/
			// 如果尚未包含相应图标集，您需要先安装
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://twitter.com",
		},
		{
			name: "Steam",
			icon: "fa6-brands:steam",
			url: "https://store.steampowered.com",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/saicaca/fuwari",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// 注意：某些样式（如背景色）会被覆盖，请查看astro.config.mjs文件
	// 请选择深色主题，因为当前博客主题仅支持深色背景
	theme: "github-dark",
};
