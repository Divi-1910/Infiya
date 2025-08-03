import React from "react";
import {Bot} from "lucide-react";

const Loading = () => {
	return (
		<div className="h-screen w-screen bg-slate-900 flex items-center justify-center relative">
			<div className="absolute inset-0 overflow-hidden z-0">
				<div className="absolute top-0 -left-4 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
				<div className="absolute -bottom-8 right-20 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
			</div>

			<div className="text-center space-y-6 relative z-10">
				<div className="relative">
					<div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
						<Bot className="w-10 h-10 text-white" />
					</div>
					<div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto animate-ping opacity-20"></div>
				</div>
				<div>
					<h2 className="text-2xl font-bold text-white mb-2">
						Initializing Infiya
					</h2>
					<p className="text-purple-300 mb-4">
						Wait a sec, Infiya is getting ready for you...
					</p>
					<div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
				</div>
			</div>
		</div>
	);
};

export default Loading;
