import ChannelStatistics from "../view/operating/channelStatistics";
import ChannelStatisticsSource from "../view/operating/channelStatisticsSource";

export default [
	{
		path: '/operating',
		redirect: '/operating/channelStatistics',
	},
	{
		path: '/operating/channelStatistics',
		component: ChannelStatistics
	},
	{
		path: '/operating/channelStatisticsSource',
		component: ChannelStatisticsSource
	}
];
