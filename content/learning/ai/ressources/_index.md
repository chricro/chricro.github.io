---
# Leave the homepage title empty to use the site title
title: "Resources"
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
- block: markdown
  content:
    text: |-
        <span style="font-family: palatino; font-size: 14px;">

        # Useful resources on generative artificial intelligence

        ## Introductory courses

        * Maxime Labonne's [course](https://github.com/mlabonne/llm-course?tab=readme-ov-file)
        * The novice LLM [training guide](https://rentry.org/llm-training)
        * [Princeton COS 597G (Fall 2022)](https://www.cs.princeton.edu/courses/archive/fall22/cos597G/)
        * Stanford NLP processing with Deep Learning on [youtube](https://www.youtube.com/playlist?list=PLoROMvodv4rMFqRtEuo6SGjY4XbRIVRd4)

        ## Interesting blogs

        * [kipp.ly](https://kipp.ly/transformer-inference-arithmetic/) inference performance guide
        * [blog euleuther](https://blog.eleuther.ai/transformer-math/) training guide
        * [Nice general content](https://jalammar.github.io/) about Generative AI
        * [Llama Factory](https://github.com/hiyouga/LLaMA-Factory?tab=readme-ov-file) fine-tuning guide
        * Llama [inference speed benchmarks](https://github.com/premAI-io/benchmarks)
        * [answer.ai](https://www.answer.ai/posts/2024-03-06-fsdp-qlora.html) on how to train a 70b model at home

        ## Some useful tools

        **OpenAI tokenizer**:

        OpenAI's large language models (sometimes referred to as GPT's) process text using tokens, which are common sequences of characters found in a set of text. The models learn to understand the statistical relationships between these tokens, and excel at producing the next token in a sequence of tokens.

        You can use this [tool](https://huggingface.co/spaces/Xenova/the-tokenizer-playground) to understand how a piece of text might be tokenized by a language model, and the total count of tokens in that piece of text.

        **arxiv-sanity**:

        Arxiv-sanity, developed and maintained by Andrej Karpathy, is a helpful tool for discovering arXiv papers that best match your keywords. You can use it simply by clicking on this [link](https://arxiv-sanity-lite.com/).

        ## Comparison of models

        The following [website](https://artificialanalysis.ai/models) provides a nice comparison and analysis of AI models across key performance metrics including quality, price, output speed, latency, context window.

        **LLM leaderboards**

        * [LMSYS Chatbot Arena](https://huggingface.co/spaces/lmsys/chatbot-arena-leaderboard)
        * [OpenLLM](https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard)
        * [Multimodal LLMs](https://github.com/BradyFU/Awesome-Multimodal-Large-Language-Models/tree/Evaluation#evaluation-leaderboards)

        ## List of papers to filter:

        * This [github](https://github.com/tiingweii-shii/Awesome-Resource-Efficient-LLM-Papers?tab=readme-ov-file) repository classifies a lot of LLM papers covering different aspects of transformers.
        * Similarly, this [github](https://github.com/Hannibal046/Awesome-LLM?tab=readme-ov-file) repository collects popular LLM papers written by the GAFAM; but also a great deal of resources on LLM deployment.
        * This Prompt engineering [section](https://www.promptingguide.ai/research) highlights miscellaneous and interesting research findings about how to better work with LLMs. It include new tips, insights and developments around important LLM research areas such as scaling, agents, efficiency, hallucination, architectures, prompt injection.
        * [GenAI LLM timeline](https://github.com/hollobit/GenAI_LLM_timeline)


        ## How to calculate the GPU requirements of a model?

        Memory = $1.2 \times$ Number of parameters $\times$ (precision / 8 bits)

        For instance, Llama-3-70B in bfloat16 requires approximatively:
        
        $1.2 \times 70B \times 16/8$ = 168GB ~ 2xA100 (80GB)

        ## Good ressources for GPU programming:

        * nvidia cuda [training series](https://www.olcf.ornl.gov/cuda-training-series/)
        * nvidia [blog](https://developer.nvidia.com/blog/even-easier-introduction-cuda/) introducing cuda
        * advanced pytorch [tutorials](https://pytorch.org/tutorials/advanced/cpp_extension.html)
        * Heterogenous Parallel Programming on [youtube](https://www.youtube.com/playlist?list=PLzn6LN6WhlN06hIOA_ge6SrgdeSiuf9Tb)
        * lecture on applied gpu programming on [youtube](https://www.youtube.com/playlist?list=PLPJwWVtf19Wgx_bupSDDSStSv-tOGGWRO)
        * [Getting started](https://www.youtube.com/watch?v=nOxKexn3iBo&t=621s) with CUDA for Python programmers

        ## Even more papers to read:

        * Recommended by Karpathy:

        {{< tweet user="karpathy" id="1734659057938477174" >}}

        * [HuggingFace - Mixture of Experts](https://huggingface.co/blog/moe)
        * [BloombergGPT](https://arxiv.org/pdf/2303.17564.pdf) (pretrained model according to Chinchilla law)
        
        </span>
---