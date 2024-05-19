"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5820],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||s;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5268:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const s={slug:"building-openai-assistant",title:"How to build an OpenAI Assistant with Internet access",authors:["assafe"],tags:["tavily","search-api","openai","assistant-api"]},o=void 0,i={permalink:"/blog/building-openai-assistant",source:"@site/blog/2023-11-12-openai-assistant/index.md",title:"How to build an OpenAI Assistant with Internet access",description:"OpenAI has done it again with a groundbreaking DevDay showcasing some of the latest improvements to the OpenAI suite of tools, products and services. One major release was the new Assistants API that makes it easier for developers to build their own assistive AI apps that have goals and can call models and tools.",date:"2023-11-12T00:00:00.000Z",formattedDate:"November 12, 2023",tags:[{label:"tavily",permalink:"/blog/tags/tavily"},{label:"search-api",permalink:"/blog/tags/search-api"},{label:"openai",permalink:"/blog/tags/openai"},{label:"assistant-api",permalink:"/blog/tags/assistant-api"}],readingTime:5.855,truncated:!1,authors:[{name:"Assaf Elovic",title:"Creator @ GPT Researcher",url:"https://github.com/assafelovic",imageURL:"https://lh3.googleusercontent.com/a/ACg8ocJtrLku69VG_2Y0sJa5mt66gIGNaEBX5r_mgE6CRPEb7A=s96-c",key:"assafe"}],prevItem:{title:"How to Build the Ultimate Research Multi-Agent Assistant",permalink:"/blog/gptr-langgraph"},nextItem:{title:"How we built GPT Researcher",permalink:"/blog/building-gpt-researcher"}},l={authorsImageUrls:[void 0]},u=[],p={toc:u};function c(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"OpenAI has done it again with a ",(0,r.kt)("a",{parentName:"p",href:"https://openai.com/blog/new-models-and-developer-products-announced-at-devday"},"groundbreaking DevDay")," showcasing some of the latest improvements to the OpenAI suite of tools, products and services. One major release was the new ",(0,r.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/assistants/overview"},"Assistants API")," that makes it easier for developers to build their own assistive AI apps that have goals and can call models and tools."),(0,r.kt)("p",null,"The new Assistants API currently supports three types of tools: Code Interpreter, Retrieval, and Function calling. Although you might expect the Retrieval tool to support online information retrieval (such as search APIs or as ChatGPT plugins), it only supports raw data for now such as text or CSV files."),(0,r.kt)("p",null,"This blog will demonstrate how to leverage the latest Assistants API with online information using the function calling tool."),(0,r.kt)("p",null,"To skip the tutorial below, feel free to check out the full ",(0,r.kt)("a",{parentName:"p",href:"https://gist.github.com/assafelovic/579822cd42d52d80db1e1c1ff82ffffd"},"Github Gist here"),"."),(0,r.kt)("p",null,"At a high level, a typical integration of the Assistants API has the following steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create an ",(0,r.kt)("a",{parentName:"li",href:"https://platform.openai.com/docs/api-reference/assistants/createAssistant"},"Assistant")," in the API by defining its custom instructions and picking a model. If helpful, enable tools like Code Interpreter, Retrieval, and Function calling."),(0,r.kt)("li",{parentName:"ul"},"Create a ",(0,r.kt)("a",{parentName:"li",href:"https://platform.openai.com/docs/api-reference/threads"},"Thread")," when a user starts a conversation."),(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("a",{parentName:"li",href:"https://platform.openai.com/docs/api-reference/messages"},"Messages")," to the Thread as the user ask questions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://platform.openai.com/docs/api-reference/runs"},"Run")," the Assistant on the Thread to trigger responses. This automatically calls the relevant tools.")),(0,r.kt)("p",null,"As you can see below, an Assistant object includes Threads for storing and handling conversation sessions between the assistant and users, and Run for invocation of an Assistant on a Thread."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"OpenAI Assistant Object",src:n(7523).Z})),(0,r.kt)("p",null,"Let\u2019s go ahead and implement these steps one by one! For the example, we will build a finance GPT that can provide insights about financial questions. We will use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openai/openai-python/tree/main#installation"},"OpenAI Python SDK v1.2")," and ",(0,r.kt)("a",{parentName:"p",href:"https://tavily.com"},"Tavily Search API"),"."),(0,r.kt)("p",null,"First things first, let\u2019s define the assistant\u2019s instructions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'assistant_prompt_instruction = """You are a finance expert. \nYour goal is to provide answers based on information from the internet. \nYou must use the provided Tavily search API function to find relevant online information. \nYou should never use your own knowledge to answer questions.\nPlease include relevant url sources in the end of your answers.\n"""\n')),(0,r.kt)("p",null,"Next, let\u2019s finalize step 1 and create an assistant using the latest ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openai/openai-python/tree/main#installation"},"GPT-4 Turbo model")," (128K context), and the call function using the ",(0,r.kt)("a",{parentName:"p",href:"https://tavily.com/"},"Tavily web search API"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Create an assistant\nassistant = client.beta.assistants.create(\n    instructions=assistant_prompt_instruction,\n    model="gpt-4-1106-preview",\n    tools=[{\n        "type": "function",\n        "function": {\n            "name": "tavily_search",\n            "description": "Get information on recent events from the web.",\n            "parameters": {\n                "type": "object",\n                "properties": {\n                    "query": {"type": "string", "description": "The search query to use. For example: \'Latest news on Nvidia stock performance\'"},\n                },\n                "required": ["query"]\n            }\n        }\n    }]\n)\n')),(0,r.kt)("p",null,"Step 2+3 are quite straight forward, we\u2019ll initiate a new thread and update it with a user message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'thread = client.beta.threads.create()\nuser_input = input("You: ")\nmessage = client.beta.threads.messages.create(\n    thread_id=thread.id,\n    role="user",\n    content=user_input,\n)\n')),(0,r.kt)("p",null,"Finally, we\u2019ll run the assistant on the thread to trigger the function call and get the response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"run = client.beta.threads.runs.create(\n    thread_id=thread.id,\n    assistant_id=assistant_id,\n)\n")),(0,r.kt)("p",null,"So far so good! But this is where it gets a bit messy. Unlike with the regular GPT APIs, the Assistants API doesn\u2019t return a synchronous response, but returns a status. This allows for asynchronous operations across assistants, but requires more overhead for fetching statuses and dealing with each manually."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Status Diagram",src:n(3529).Z})),(0,r.kt)("p",null,"To manage this status lifecycle, let\u2019s build a function that can be reused and handles waiting for various statuses (such as \u2018requires_action\u2019):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Function to wait for a run to complete\ndef wait_for_run_completion(thread_id, run_id):\n    while True:\n        time.sleep(1)\n        run = client.beta.threads.runs.retrieve(thread_id=thread_id, run_id=run_id)\n        print(f\"Current run status: {run.status}\")\n        if run.status in ['completed', 'failed', 'requires_action']:\n            return run\n")),(0,r.kt)("p",null,"This function will sleep as long as the run has not been finalized such as in cases where it\u2019s completed or requires an action from a function call."),(0,r.kt)("p",null,"We\u2019re almost there! Lastly, let\u2019s take care of when the assistant wants to call the web search API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Function to handle tool output submission\ndef submit_tool_outputs(thread_id, run_id, tools_to_call):\n    tool_output_array = []\n    for tool in tools_to_call:\n        output = None\n        tool_call_id = tool.id\n        function_name = tool.function.name\n        function_args = tool.function.arguments\n\n        if function_name == "tavily_search":\n            output = tavily_search(query=json.loads(function_args)["query"])\n\n        if output:\n            tool_output_array.append({"tool_call_id": tool_call_id, "output": output})\n\n    return client.beta.threads.runs.submit_tool_outputs(\n        thread_id=thread_id,\n        run_id=run_id,\n        tool_outputs=tool_output_array\n    )\n')),(0,r.kt)("p",null,"As seen above, if the assistant has reasoned that a function call should trigger, we extract the given required function params and pass back to the runnable thread. We catch this status and call our functions as seen below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"if run.status == 'requires_action':\n    run = submit_tool_outputs(thread.id, run.id, run.required_action.submit_tool_outputs.tool_calls)\n    run = wait_for_run_completion(thread.id, run.id)\n")),(0,r.kt)("p",null,"That\u2019s it! We now have a working OpenAI Assistant that can be used to answer financial questions using real time online information. Below is the full runnable code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import os\nimport json\nimport time\nfrom openai import OpenAI\nfrom tavily import TavilyClient\n\n# Initialize clients with API keys\nclient = OpenAI(api_key=os.environ["OPENAI_API_KEY"])\ntavily_client = TavilyClient(api_key=os.environ["TAVILY_API_KEY"])\n\nassistant_prompt_instruction = """You are a finance expert. \nYour goal is to provide answers based on information from the internet. \nYou must use the provided Tavily search API function to find relevant online information. \nYou should never use your own knowledge to answer questions.\nPlease include relevant url sources in the end of your answers.\n"""\n\n# Function to perform a Tavily search\ndef tavily_search(query):\n    search_result = tavily_client.get_search_context(query, search_depth="advanced", max_tokens=8000)\n    return search_result\n\n# Function to wait for a run to complete\ndef wait_for_run_completion(thread_id, run_id):\n    while True:\n        time.sleep(1)\n        run = client.beta.threads.runs.retrieve(thread_id=thread_id, run_id=run_id)\n        print(f"Current run status: {run.status}")\n        if run.status in [\'completed\', \'failed\', \'requires_action\']:\n            return run\n\n# Function to handle tool output submission\ndef submit_tool_outputs(thread_id, run_id, tools_to_call):\n    tool_output_array = []\n    for tool in tools_to_call:\n        output = None\n        tool_call_id = tool.id\n        function_name = tool.function.name\n        function_args = tool.function.arguments\n\n        if function_name == "tavily_search":\n            output = tavily_search(query=json.loads(function_args)["query"])\n\n        if output:\n            tool_output_array.append({"tool_call_id": tool_call_id, "output": output})\n\n    return client.beta.threads.runs.submit_tool_outputs(\n        thread_id=thread_id,\n        run_id=run_id,\n        tool_outputs=tool_output_array\n    )\n\n# Function to print messages from a thread\ndef print_messages_from_thread(thread_id):\n    messages = client.beta.threads.messages.list(thread_id=thread_id)\n    for msg in messages:\n        print(f"{msg.role}: {msg.content[0].text.value}")\n\n# Create an assistant\nassistant = client.beta.assistants.create(\n    instructions=assistant_prompt_instruction,\n    model="gpt-4-1106-preview",\n    tools=[{\n        "type": "function",\n        "function": {\n            "name": "tavily_search",\n            "description": "Get information on recent events from the web.",\n            "parameters": {\n                "type": "object",\n                "properties": {\n                    "query": {"type": "string", "description": "The search query to use. For example: \'Latest news on Nvidia stock performance\'"},\n                },\n                "required": ["query"]\n            }\n        }\n    }]\n)\nassistant_id = assistant.id\nprint(f"Assistant ID: {assistant_id}")\n\n# Create a thread\nthread = client.beta.threads.create()\nprint(f"Thread: {thread}")\n\n# Ongoing conversation loop\nwhile True:\n    user_input = input("You: ")\n    if user_input.lower() == \'exit\':\n        break\n\n    # Create a message\n    message = client.beta.threads.messages.create(\n        thread_id=thread.id,\n        role="user",\n        content=user_input,\n    )\n\n    # Create a run\n    run = client.beta.threads.runs.create(\n        thread_id=thread.id,\n        assistant_id=assistant_id,\n    )\n    print(f"Run ID: {run.id}")\n\n    # Wait for run to complete\n    run = wait_for_run_completion(thread.id, run.id)\n\n    if run.status == \'failed\':\n        print(run.error)\n        continue\n    elif run.status == \'requires_action\':\n        run = submit_tool_outputs(thread.id, run.id, run.required_action.submit_tool_outputs.tool_calls)\n        run = wait_for_run_completion(thread.id, run.id)\n\n    # Print messages from the thread\n    print_messages_from_thread(thread.id)\n')),(0,r.kt)("p",null,"The assistant can be further customized and improved using additional retrieval information, OpenAI\u2019s coding interpreter and more. Also, you can go ahead and add more function tools to make the assistant even smarter."),(0,r.kt)("p",null,"Feel free to drop a comment below if you have any further questions!"))}c.isMDXComponent=!0},3529:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/diagram-1-6294e919a265f26a37175386003c5074.png"},7523:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/diagram-assistant-dc2f0898038aeab2cea7be34e9e528ed.jpeg"}}]);