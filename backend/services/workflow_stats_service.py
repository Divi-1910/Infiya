import json
from typing import Dict, Any, Optional
from core.redis import get_redis_memory_client
import logging

logger = logging.getLogger(__name__)

class WorkflowStatsService:
    
    @staticmethod
    async def get_workflow_stats_from_redis(workflow_id: str) -> Optional[Dict[str, Any]]:
        """Get workflow stats from Redis"""
        try:
            redis_client = await get_redis_memory_client()
            workflow_key = f"workflow:{workflow_id}:state"
            
            workflow_data = await redis_client.get(workflow_key)
            if not workflow_data:
                return None
            
            workflow_context = json.loads(workflow_data)
            processing_stats = workflow_context.get("processing_stats", {})
            videos = workflow_context.get("videos", {})
            articles = workflow_context.get("articles", {})
            
            ## processing_time_total_ms 
            # intent classification 
            # metadata 
            # sources 
            # raw_query 
            # 
            stats = {
                "intent": workflow_context.get("intent"),
                "total_duration_ms": processing_stats.get("total_duration", 0) // 1000000,
                "api_calls_count": processing_stats.get("api_calls_count", 0),
                "articles": articles,
                "videos" : videos,
                "articles_found" : processing_stats.get("articles_filtered" , 0),
                "videos_found" : processing_stats.get("videos_filtered", 0),
            }
            
            print("STATS : \n")
            print(stats)
            print("\n")
            
                        
            await redis_client.close()
            return stats
            
        except Exception as e:
            logger.error(f"Error getting workflow stats: {str(e)}")
            return None