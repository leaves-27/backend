import channelStatistics from "../view/operating/channelStatistics";
import channelStatisticsSource from "../view/operating/channelStatisticsSource";

export default [
	{
		path: '/operating',
		redirect: '/operating/channelStatistics',
	},
	{
		path: '/operating/channelStatistics',
		component: channelStatistics
	},
	{
		path: '/operating/channelStatisticsSource',
		component: channelStatisticsSource
	}
];
