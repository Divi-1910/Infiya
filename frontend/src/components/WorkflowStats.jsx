import React, { useState } from "react";
import {
  TrendingUp,
  Clock,
  Zap,
  FileText,
  Video,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Globe
} from "lucide-react";

const WorkflowStats = ({ stats }) => {
  const [showSources, setShowSources] = useState(false);

  if (!stats) return null;

  const isNewsIntent = stats.intent === "NEW_NEWS_QUERY";
  const hasArticles = stats.articles && stats.articles.length > 0;
  const hasVideos = stats.videos && stats.videos.length > 0;
  const hasSources = isNewsIntent && (hasArticles || hasVideos);

  return (
    <div className="mt-4 p-3 bg-slate-800/50 rounded-lg border border-white/10">
      <div className="flex items-center gap-2 mb-2">
        <TrendingUp className="w-4 h-4 text-cyan-400" />
        <span className="text-sm font-medium text-cyan-400">
          Workflow Stats
        </span>
      </div>

      {!isNewsIntent && (
        <div className="grid grid-cols-2 gap-4 text-xs mb-3">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-gray-400" />
            <span className="text-gray-400">Duration:</span>
            <span className="text-white font-medium">
              {stats.total_duration_ms || 0}ms
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Zap className="w-3 h-3 text-gray-400" />
            <span className="text-gray-400">API Calls:</span>
            <span className="text-white font-medium">
              {stats.api_calls_count || 0}
            </span>
          </div>
        </div>
      )}

      {hasSources && (
        <>
          <div className="grid grid-cols-2 gap-4 text-xs mb-3">
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-gray-400" />
              <span className="text-gray-400">Duration:</span>
              <span className="text-white font-medium">
                {stats.total_duration_ms || 0}ms
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Zap className="w-3 h-3 text-gray-400" />
              <span className="text-gray-400">API Calls:</span>
              <span className="text-white font-medium">
                {stats.api_calls_count || 0}
              </span>
            </div>
          </div>

          <button
            onClick={() => setShowSources(!showSources)}
            className="flex items-center justify-between w-full text-left p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200 group"
          >
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400">Found:</span>
              {hasArticles && (
                <div className="flex items-center gap-1">
                  <FileText className="w-3 h-3 text-green-400" />
                  <span className="text-xs text-green-400 font-medium">
                    {stats.articles_found || stats.articles.length} articles
                  </span>
                </div>
              )}
              {hasVideos && (
                <div className="flex items-center gap-1">
                  <Video className="w-3 h-3 text-red-400" />
                  <span className="text-xs text-red-400 font-medium">
                    {stats.videos_found || stats.videos.length} videos
                  </span>
                </div>
              )}
            </div>
            {showSources ? (
              <ChevronUp className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
            ) : (
              <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
            )}
          </button>

          {showSources && (
            <div className="mt-3 space-y-3 animate-fade-in">
              {hasArticles && (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-4 h-4 text-green-400" />
                    <span className="text-sm font-medium text-green-400">
                      Articles
                    </span>
                  </div>
                  <div className="space-y-2">
                    {stats.articles.map((article, index) => (
                      <a
                        key={index}
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start gap-3 p-2 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-all duration-200 hover:scale-[1.02]"
                      >
                        {article.image_url ? (
                          <img
                            src={article.image_url}
                            alt={article.title}
                            className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                          />
                        ) : (
                          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Globe className="w-4 h-4 text-white" />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-medium text-white group-hover:text-green-300 transition-colors truncate">
                            {article.title}
                          </h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-gray-400">
                              {article.source || "Unknown Source"}
                            </span>
                            {article.published_at && (
                              <>
                                <span className="text-xs text-gray-500">•</span>
                                <span className="text-xs text-gray-500">
                                  {new Date(
                                    article.published_at
                                  ).toLocaleDateString()}
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                        <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-green-300 transition-colors flex-shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
              {hasVideos && (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Video className="w-4 h-4 text-red-400" />
                    <span className="text-sm font-medium text-red-400">
                      Videos
                    </span>
                  </div>
                  <div className="space-y-2">
                    {stats.videos.map((video, index) => (
                      <a
                        key={index}
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start gap-3 p-2 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-all duration-200 hover:scale-[1.02]"
                      >
                        {video.thumbnail_url ? (
                          <img
                            src={video.thumbnail_url}
                            alt={video.title}
                            className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                          />
                        ) : (
                          <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Video className="w-4 h-4 text-white" />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-medium text-white group-hover:text-red-300 transition-colors truncate">
                            {video.title}
                          </h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-gray-400">
                              {video.channel || "YouTube"}
                            </span>
                            {video.published_at && (
                              <>
                                <span className="text-xs text-gray-500">•</span>
                                <span className="text-xs text-gray-500">
                                  {new Date(
                                    video.published_at
                                  ).toLocaleDateString()}
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                        <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-red-300 transition-colors flex-shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default WorkflowStats;
