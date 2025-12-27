"""
Instantly Forge - Weapon 3 of the Alpha Strike Engine
Takes a list of URLs, runs analysis, and generates a CSV for Instantly.ai
"""

import asyncio
import csv
import os
from prospect_analyzer import ProspectAnalyzer

async def forge_campaign(name: str, urls: list):
    analyzer = ProspectAnalyzer()
    results = []
    
    print(f"🚀 Forging campaign: {name} with {len(urls)} leads")
    
    # Process in batches to avoid rate limits
    batch_size = 5
    for i in range(0, len(urls), batch_size):
        batch = urls[i:i+batch_size]
        tasks = [analyzer.analyze_website(url) for url in batch]
        batch_results = await asyncio.gather(*tasks)
        
        for url, data in zip(batch, batch_results):
            if "error" not in data:
                # Add metadata
                data["website"] = url
                # Create a fake demo link (we'll implement the overlay later)
                data["demo_link"] = f"https://atliso.com/demo?url={url}"
                results.append(data)
        
        print(f"✅ Processed {min(i + batch_size, len(urls))}/{len(urls)}")
    
    # Export to CSV
    filename = f"campaign_{name}.csv"
    if results:
        keys = results[0].keys()
        with open(filename, 'w', newline='', encoding='utf-8') as f:
            dict_writer = csv.DictWriter(f, fieldnames=keys)
            dict_writer.writeheader()
            dict_writer.writerows(results)
        print(f"✨ SUCCESS! {len(results)} personalized leads saved to {filename}")
    else:
        print("❌ No leads were processed successfully.")

if __name__ == "__main__":
    # Sample Test Run
    test_urls = [
        "https://www.openai.com",
        "https://www.anthropic.com"
    ]
    asyncio.run(forge_campaign("test_run", test_urls))
