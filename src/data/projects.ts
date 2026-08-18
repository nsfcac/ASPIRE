export type Phase = {
  label: string;
  weeks: string;
  weekStart: number;
  weekEnd: number;
  title: string;
  body: string;
};

export type Project = {
  id: number;
  slug: string;
  title: string;
  short: string;
  mentors: string[];
  /** Primary application domain used for grouping and figures. */
  domain: 'HPC Systems' | 'AI Systems & Efficiency' | 'AI Security' | 'AI for Science & Health' | 'Computing Education';
  /** Where the project sits on the AI <-> HPC continuum (0 = HPC-centric, 100 = AI-centric). */
  aiHpcBalance: number;
  objective: string;
  benefits: string;
  significance: string;
  phases: Phase[];
  skills: string[];
  entryBarrier: string;
  deliverables: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    slug: 'hpc-telemetry',
    title: 'Telemetry-Driven Understanding of HPC System Behavior',
    short: 'Use REPACSS telemetry to characterize how compute nodes behave under real workloads, utilization, power, and temperature conditions.',
    mentors: ['Yong Chen', 'Jie Li'],
    domain: 'HPC Systems',
    aiHpcBalance: 10,
    objective:
      'This project will use REPACSS telemetry to study how compute nodes behave under different workloads, utilization levels, power demands, and temperature conditions.',
    benefits:
      'Students will be introduced to high-performance computing through accessible data-analysis tasks such as cleaning datasets, creating visualizations, and interpreting system behavior. They will learn how scientific workloads use CPU, memory, GPU, and power resources and how these activities appear in system monitoring data. Along the way, students will gain practical experience with Linux, Python, Pandas, Jupyter notebooks, Slurm, time-series analysis, and data visualization. Regular mentor meetings and group discussions will help them learn how to formulate research questions, work with noisy real-world data, interpret results, and communicate findings.',
    significance:
      'Reliable operation of modern HPC systems depends on understanding workload activity, resource utilization, temperature, power consumption, and node health. Prior work has shown the value of large-scale system monitoring and fine-grained power measurement for understanding HPC behavior. REPACSS provides students with access to telemetry from CPU and GPU nodes, Slurm, and power- and temperature-related sensors. Students will use these data to establish baseline system behavior, compare idle and active periods, and study how different workloads affect system resources. Possible questions include how much power nodes consume while idle, how CPU and GPU partitions differ, and whether certain nodes show unusual utilization or temperature patterns.',
    phases: [
      {
        label: 'Phase 1',
        weeks: 'Weeks 1–3',
        weekStart: 1,
        weekEnd: 3,
        title: 'HPC Training and Data Preparation',
        body: 'Introductory training in Linux, Python, Pandas, Jupyter notebooks, Slurm, REPACSS, and basic HPC monitoring. Students run small jobs and observe how job activity appears in telemetry such as CPU and memory utilization, GPU utilization, temperature, power draw, and node state. They then clean and align the data, handle missing measurements, and create initial time-series plots linking workload activity to node behavior.',
      },
      {
        label: 'Phase 2',
        weeks: 'Weeks 4–7',
        weekStart: 4,
        weekEnd: 7,
        title: 'Focused Analysis',
        body: 'Students choose one or two focused research questions — how power consumption differs between idle and active periods, whether similar jobs show similar utilization patterns, how CPU and GPU nodes differ, or whether some nodes exhibit unusual behavior. They develop reproducible notebooks and simple dashboards that combine telemetry with Slurm job data. Mentor meetings and peer discussions help students refine methods and distinguish meaningful patterns from measurement noise.',
      },
      {
        label: 'Phase 3',
        weeks: 'Weeks 8–10',
        weekStart: 8,
        weekEnd: 10,
        title: 'Validation and Communication',
        body: 'Students validate findings across multiple nodes, workloads, partitions, or time periods and document limitations in the available data. They finalize their analysis workflow, notebooks, and a small demonstration dashboard, concluding with a technical report and an oral or poster presentation.',
      },
    ],
    skills: ['Linux', 'Python / Pandas', 'Jupyter', 'Slurm', 'Time-series analysis', 'Data visualization'],
    entryBarrier: 'Designed for students with introductory programming experience; no prior HPC knowledge required.',
    deliverables: ['Reusable analysis notebooks', 'Telemetry visualizations', 'Demonstration dashboard', 'Technical report + poster/oral presentation'],
  },
  {
    id: 2,
    slug: 'runtime-prediction',
    title: 'Performance Analysis and Runtime Prediction of Scientific Applications',
    short: 'Predict application runtime from workload features such as input size and processor count using empirical and machine-learning models.',
    mentors: ['Yong Chen', 'Jie Li'],
    domain: 'HPC Systems',
    aiHpcBalance: 30,
    objective:
      'This project will study whether the runtime of a scientific application can be predicted from workload features such as input size and processor count using simple empirical and machine-learning models.',
    benefits:
      'Students will be introduced to HPC performance analysis, empirical modeling, and machine learning through a prepared scientific application. They will learn to design controlled experiments, collect and visualize workload data, build baseline predictors, and evaluate model accuracy — gaining experience with Python, Pandas, Jupyter notebooks, Slurm, regression models, and scientific communication. Regular mentor meetings, peer code reviews, and discussions with students in related projects will help them understand prediction errors and the limits of data-driven models.',
    significance:
      'Runtime estimates help users request appropriate resources and help computing facilities improve scheduling and resource utilization. Prior studies have shown that runtime prediction can support queue-time estimation and scheduling decisions. This project will examine whether simple application-specific models can outperform basic estimates such as average runtime or requested wall-clock limits, and will identify cases in which different models work well or fail. Results will also support REPACSS efforts to better understand scientific workloads.',
    phases: [
      {
        label: 'Phase 1',
        weeks: 'Weeks 1–3',
        weekStart: 1,
        weekEnd: 3,
        title: 'Training and Baseline Modeling',
        body: 'Introductory training in HPC, Slurm, REPACSS, experimental design, data analysis, and predictive modeling. Using a prepared scientific application and sample dataset, students explore runtime trends, build a simple baseline predictor, and learn how to measure prediction error, ending the phase with a working data-collection workflow and initial model.',
      },
      {
        label: 'Phase 2',
        weeks: 'Weeks 4–7',
        weekStart: 4,
        weekEnd: 7,
        title: 'Data Collection and Model Evaluation',
        body: 'Students run controlled experiments varying application input size and processor count while recording runtime and resource information. They compare interpretable models such as linear regression and decision-tree regression against the baseline predictor, and gradually take more responsibility for feature selection, evaluation metrics, and explaining why accuracy changes across workload configurations.',
      },
      {
        label: 'Phase 3',
        weeks: 'Weeks 8–10',
        weekStart: 8,
        weekEnd: 10,
        title: 'Prototype and Communication',
        body: 'Students combine results into a documented dataset, analysis notebook, and a simple tool that predicts runtime from selected workload features. They identify major sources of error and limitations, including small datasets, untested configurations, and application-specific behavior, and present methods, results, and implications.',
      },
    ],
    skills: ['Python / Pandas', 'Jupyter', 'Slurm', 'Regression & decision trees', 'Experimental design', 'Scientific communication'],
    entryBarrier: 'Structured starter materials and interpretable methods make the project accessible with introductory programming experience and no prior HPC background.',
    deliverables: ['Reproducible workload dataset', 'Comparison of prediction methods', 'Runtime-estimation prototype', 'Technical report + presentation'],
  },
  {
    id: 3,
    slug: 'cpu-gpu-crossover',
    title: 'Comparing CPU and GPU Execution for Scientific Workloads',
    short: 'Determine how problem size shapes the relative performance of CPU and GPU execution, and where the crossover point lies.',
    mentors: ['Jie Li', 'Yong Chen'],
    domain: 'HPC Systems',
    aiHpcBalance: 15,
    objective:
      'This project will study how problem size affects the relative performance of CPU and GPU execution for scientific workloads on REPACSS.',
    benefits:
      'Students will be introduced to heterogeneous computing and performance analysis using prepared CPU and GPU versions of the same application. They will learn to design fair experiments, run workloads on different architectures, measure runtime and throughput, and account for startup and data-transfer overhead. Prior studies show that meaningful CPU–GPU comparisons require both well-optimized implementations and careful treatment of data movement. Students also gain experience with Python, Pandas, Jupyter notebooks, Slurm, performance visualization, and scientific communication.',
    significance:
      'Modern HPC systems combine CPUs and GPUs, but the best resource often depends on workload size and application behavior. GPUs can provide substantial speedups for highly parallel workloads, while their startup and data-transfer costs may reduce their advantage for smaller problems. Using REPACSS CPU and NVIDIA H100 GPU nodes, students will examine when GPU execution begins to outperform CPU execution, producing a performance dataset, runtime and speedup visualizations, an estimate of the crossover region, and a simple resource-selection guideline.',
    phases: [
      {
        label: 'Phase 1',
        weeks: 'Weeks 1–3',
        weekStart: 1,
        weekEnd: 3,
        title: 'Training and Baseline Comparison',
        body: 'Introductory training in CPU and GPU computing, Slurm, REPACSS, experimental design, and performance analysis. Using prepared implementations of an application such as matrix multiplication, image filtering, or machine-learning inference, students reproduce a baseline CPU–GPU comparison, verify correctness, measure runtime and throughput, and separate computation time from initialization and data-transfer overhead.',
      },
      {
        label: 'Phase 2',
        weeks: 'Weeks 4–7',
        weekStart: 4,
        weekEnd: 7,
        title: 'Controlled Experiments',
        body: 'Students vary application problem size and measure CPU and GPU performance across repeated runs. They calculate GPU speedup, visualize how performance changes with workload size, identify the approximate point at which GPU execution becomes advantageous, then collect additional measurements around this crossover region and investigate unexpected results.',
      },
      {
        label: 'Phase 3',
        weeks: 'Weeks 8–10',
        weekStart: 8,
        weekEnd: 10,
        title: 'Resource-Selection Guidance and Communication',
        body: 'Students organize results into a documented dataset and reproducible analysis notebook, refine the estimated CPU–GPU crossover region, and develop a simple guideline for choosing between CPU and GPU resources based on workload size.',
      },
    ],
    skills: ['Heterogeneous computing', 'Performance measurement', 'Python / Pandas', 'Slurm', 'Performance visualization'],
    entryBarrier: 'Working implementations and software environments are provided; no GPU programming experience required.',
    deliverables: ['CPU–GPU performance dataset', 'Runtime and speedup visualizations', 'Estimated crossover region', 'Resource-selection guideline'],
  },
  {
    id: 4,
    slug: 'ai-user-support',
    title: 'AI-Assisted HPC User Support and Workflow Automation',
    short: 'Build and evaluate a retrieval-grounded assistant that helps new REPACSS users write Slurm scripts and diagnose common errors.',
    mentors: ['Jie Li', 'Yong Chen'],
    domain: 'AI Systems & Efficiency',
    aiHpcBalance: 65,
    objective:
      'This project will develop and evaluate an AI-assisted tool that helps new REPACSS users understand basic HPC concepts, create Slurm job scripts, troubleshoot common errors, and follow recommended workflows.',
    benefits:
      'Students will learn HPC by working on a problem they can easily relate to: helping new users get started on a shared computing system. They will first gain experience with Linux, Slurm, Python, software modules, and basic scientific workflows, then use that knowledge to build a support tool for other users — learning prompt design, retrieval-augmented generation, documentation curation, software development, and evaluation of AI-generated responses. Mentor meetings, peer testing, and feedback from REPACSS users teach students how to turn technical documentation into clear guidance and when an AI system should defer to human support.',
    significance:
      'New users often struggle with practical HPC tasks such as choosing resources, loading software, writing Slurm scripts, and understanding job errors — barriers that make advanced computing systems difficult to adopt. Rather than relying only on a general-purpose language model, the tool will use REPACSS documentation, policies, and examples as its knowledge base, improving accuracy and traceability while reducing outdated or unsupported answers. Students will also create a small evaluation dataset of representative user questions and reference answers, following principles of systematic evaluation and human oversight.',
    phases: [
      {
        label: 'Phase 1',
        weeks: 'Weeks 1–3',
        weekStart: 1,
        weekEnd: 3,
        title: 'HPC Training and Knowledge-Base Development',
        body: 'Introductory training in Linux, Slurm, REPACSS resources, software modules, scientific workflows, and responsible AI use. Students run simple jobs, record common questions and errors, review existing REPACSS documentation, and organize job-script examples, FAQs, software instructions, resource policies, and common error messages into a small knowledge base.',
      },
      {
        label: 'Phase 2',
        weeks: 'Weeks 4–7',
        weekStart: 4,
        weekEnd: 7,
        title: 'Prototype Development',
        body: 'Students build a focused prototype using retrieval-augmented generation or a similar question-answering approach, supporting a limited set of tasks: answering introductory questions, generating CPU and GPU job scripts, explaining resource options, and diagnosing common submission errors. They test generated scripts, improve prompts and retrieval methods, and define cases in which the tool should refer users to official documentation or human support.',
      },
      {
        label: 'Phase 3',
        weeks: 'Weeks 8–10',
        weekStart: 8,
        weekEnd: 10,
        title: 'Evaluation and Communication',
        body: 'Students evaluate the prototype using representative user questions and expert-developed reference answers, examining correctness, clarity, source grounding, and common failure cases, then refine the tool and document its limitations.',
      },
    ],
    skills: ['Linux & Slurm', 'Python', 'Retrieval-augmented generation', 'Prompt design', 'LLM evaluation', 'Technical writing'],
    entryBarrier: 'Designed for students with introductory programming experience; no prior HPC experience required.',
    deliverables: ['Working assistant prototype', 'REPACSS knowledge base', 'Evaluation dataset', 'Short user guide'],
  },
  {
    id: 5,
    slug: 'edos-security',
    title: 'Security Attacks on Variable-Energy HPC Systems',
    short: 'Investigate whether containerization can detect and regulate denial-of-service and energy-based denial-of-service attacks on HPC clusters.',
    mentors: ['Susan Mengel'],
    domain: 'AI Security',
    aiHpcBalance: 20,
    objective:
      'This project will investigate the role containerization technologies may play in detecting and regulating denial-of-service (DOS) and energy-based denial-of-service (eDOS) attacks.',
    benefits:
      'Students will meet regularly with faculty and mentors to discuss research progress, training needs, ideas to overcome barriers, and improving the detection and mitigation of DOS and eDOS attacks. Peer demonstrations require students to explain their experimental setup and the security issues they detect and mitigate to colleagues unfamiliar with containers and DOS-type attacks. Students gain hands-on experience investigating an important and timely issue that is difficult to mitigate and will require their creativity to stop attackers from draining the stored energy of HPC clusters.',
    significance:
      'HPC systems such as the REPACSS cluster have high energy costs due to compute power, cooling needs, and batteries that must be recharged. New attack surfaces have opened to exploit energy-aware mechanisms: eDOS attacks exploit HPC job scheduling and resource allocation by submitting workloads that deliberately waste computational resources, resulting in excessive energy usage. Containerization technologies such as Singularity, Docker, and Apptainer add a layer of complexity that is largely unexplored — containers are usually optimized for file system and process namespace isolation rather than how much power a workload consumes.',
    phases: [
      {
        label: 'Phase 1',
        weeks: 'Weeks 1–3',
        weekStart: 1,
        weekEnd: 3,
        title: 'Training and Literature Grounding',
        body: 'Faculty and mentors train students on DOS and eDOS attacks, UNIX, C programming, and containers, plus tools such as Slurm and Intel RAPL for scheduling processes and collecting energy metrics. Mentors guide students through the research literature on DOS and eDOS attacks to inform their work with past ideas and results.',
      },
      {
        label: 'Phase 2',
        weeks: 'Weeks 4–7',
        weekStart: 4,
        weekEnd: 7,
        title: 'Containment Experiments',
        body: 'Students choose one containerization technology and test the hypothesis that the container can facilitate detection and regulation of energy-based attacks. Using prepared victim and attacker workloads — and applications of their own — they collect runtime and energy-usage metrics for three scenarios: baseline (victim), eDOS (unmitigated), and eDOS (mitigated).',
      },
      {
        label: 'Phase 3',
        weeks: 'Weeks 8–10',
        weekStart: 8,
        weekEnd: 10,
        title: 'Analysis and Recommendations',
        body: 'Students analyze experimental results across applications to determine the best ways containers can help detect and regulate eDOS attacks, and document their work in technical reports, posters, and presentations.',
      },
    ],
    skills: ['UNIX & C', 'Containers (Docker / Singularity / Apptainer)', 'Slurm', 'Intel RAPL energy metrics', 'Security experimentation'],
    entryBarrier: 'Mentors prepare training for students with varying backgrounds in systems, C, and containers.',
    deliverables: ['Victim and attacker application dataset', 'Identified container features for regulating DOS/eDOS', 'Energy and runtime measurements', 'Practical mitigation recommendations'],
  },
  {
    id: 6,
    slug: 'gpu-education-agents',
    title: 'GPU Programming Education Utilizing Cognitive Learning Theories',
    short: 'Study how AI agents grounded in learning theory can teach GPU programming abstractions without simply giving away the answer.',
    mentors: ['Susan Mengel', 'Yong Chen'],
    domain: 'Computing Education',
    aiHpcBalance: 70,
    objective:
      'This project will investigate how AI agents may utilize cognitive learning theories to help students learn GPU programming abstractions.',
    benefits:
      'Students will meet regularly with faculty and mentors to discuss research progress, training needs, and ideas for improving the ability of the LLM to help students learn. Peer demonstrations require students to explain their experimental setup and learning-theory LLM issues to colleagues unfamiliar with learning theories and LLMs. Students gain hands-on experience investigating a current need: AI agents that can foster learning in the difficult subject of GPU programming.',
    significance:
      'In programming courses, students and instructors may find themselves in the uncomfortable position of an AI agent giving an entire function or program. Such behavior encourages shallow learning, where students pass a course only to discover the material was not really learned. GPU programming requires mastering several abstractions — efficient data movement to and from the GPU, techniques such as shared memory tiling and convolution, and GPU architectural understanding. Traditional GPU learning material focuses on practice and architecture, but helping students understand parallelism may not occur with an agent that simply gives answers. Learning theories such as behaviorism, cognitivism, constructivism, connectivism, and social learning theory may not form the basis for how the agent interacts with the student.',
    phases: [
      {
        label: 'Phase 1',
        weeks: 'Weeks 1–3',
        weekStart: 1,
        weekEnd: 3,
        title: 'Training and Literature Grounding',
        body: 'Faculty and mentors train students on UNIX, C programming, and the NVIDIA GPU, plus Python, natural language processing, and LLMs as needed to begin training the agent. Mentors guide students through the research literature on learning theories and GPU education.',
      },
      {
        label: 'Phase 2',
        weeks: 'Weeks 4–7',
        weekStart: 4,
        weekEnd: 7,
        title: 'Agent Development with a Learning Theory',
        body: 'Students choose one learning theory and test the hypothesis that an AI agent trained with that theory can help students understand GPU programming. They use prepared datasets and open models (e.g. a 14B-parameter Qwen model served through Ollama), apply RAG, collect additional training data, and use prepared lessons on two or more GPU abstractions while authoring additional lessons.',
      },
      {
        label: 'Phase 3',
        weeks: 'Weeks 8–10',
        weekStart: 8,
        weekEnd: 10,
        title: 'Analysis and Lesson Materials',
        body: 'Students analyze results from using the LLM with example GPU lessons to determine the best ways LLMs can be instrumented with a learning theory to guide a student through a lesson without giving away code.',
      },
    ],
    skills: ['UNIX & C', 'CUDA / GPU abstractions', 'Python & NLP', 'Open-weight LLMs & RAG', 'Learning-theory instrumentation'],
    entryBarrier: 'Mentors prepare training for students with varying backgrounds; the project spans systems and AI.',
    deliverables: ['Prepared GPU lessons and materials', 'LLM agent that teaches GPU abstractions', 'Technical reports, posters, presentations'],
  },
  {
    id: 7,
    slug: 'clinical-agents',
    title: 'Design of Open-Source Clinical Agents',
    short: 'Develop transparent, inspectable agents from open-weight models that help clinicians find, evaluate, and synthesize medical evidence.',
    mentors: ['Maaz Amjad', 'Susan Mengel'],
    domain: 'AI for Science & Health',
    aiHpcBalance: 85,
    objective:
      'This project will investigate how open-weight foundation models can be used to develop transparent and inspectable AI agents that help clinicians find, evaluate, and synthesize medical evidence.',
    benefits:
      'Students will gain hands-on experience designing open-source AI agents and working with large language models, natural language processing, retrieval-augmented generation, model routing, privacy, evaluation, and deployment. Using the REPACSS cluster, students will work with open-weight models, fine-tuning methods, biomedical retrieval systems, and multi-vector embeddings. Students will build on advances in autonomous scientific discovery, literature synthesis, reasoning, and language generation by exploring open research questions such as faithful attribution and calibrated abstention, collaborating with faculty and graduate researchers in TTU’s AI4CSE Lab.',
    significance:
      'Clinicians increasingly use AI to support diagnosis and summarize medical research and standards of care. Effectively connecting clinical questions with current, relevant, and traceable medical evidence remains an important research opportunity — particularly because access to a general-purpose LLM alone has not been shown to improve physicians’ diagnostic reasoning. This project will develop open-source, inspectable agents that retrieve, evaluate, and synthesize published medical evidence with traceable citations, supporting transparent and reproducible research workflows and aligning with NSF’s Smart Health program and the Genesis Mission.',
    phases: [
      {
        label: 'Phase 1',
        weeks: 'Weeks 1–2',
        weekStart: 1,
        weekEnd: 2,
        title: 'Literature Review and Research Question',
        body: 'Students review relevant clinical guidelines and research on medical question answering, scientific agents, and retrieval methods, and define a focused research question.',
      },
      {
        label: 'Phase 2',
        weeks: 'Weeks 3–5',
        weekStart: 3,
        weekEnd: 5,
        title: 'Agent Development and Retrieval',
        body: 'Students select open-weight models, deploy and fine-tune them on REPACSS, and compare keyword, vector, hybrid, and reranking retrieval methods. They develop agents that interpret medical questions, generate claims, and provide supporting or contradicting evidence with citations.',
      },
      {
        label: 'Phase 3',
        weeks: 'Weeks 6–7',
        weekStart: 6,
        weekEnd: 7,
        title: 'Uncertainty, Routing, and Safety',
        body: 'Students incorporate uncertainty measures and model routing, using models of different sizes based on task requirements, and explore approaches for improving privacy, reliability, and robustness.',
      },
      {
        label: 'Phase 4',
        weeks: 'Weeks 8–10',
        weekStart: 8,
        weekEnd: 10,
        title: 'Evaluation and Presentation',
        body: 'Students evaluate their agents using retrieval quality, citation correctness, evidence completeness, unsupported-claim rate, uncertainty, time-to-evidence, and expert review; analyze system performance; identify opportunities for improvement; and present findings.',
      },
    ],
    skills: ['Open-weight LLMs', 'Fine-tuning on GPUs', 'Biomedical retrieval & embeddings', 'Model routing', 'Agent evaluation'],
    entryBarrier: 'Students work alongside faculty and graduate researchers in the AI4CSE Lab with staged onboarding.',
    deliverables: ['Open-source clinical agent framework', 'Retrieval method comparison', 'Evaluation of citation correctness and abstention', 'Presentation of findings'],
  },
  {
    id: 8,
    slug: 'efficient-agentic-inference',
    title: 'Efficient Agentic AI Inference',
    short: 'Investigate how agentic AI workflows can use GPU and HPC resources efficiently while balancing quality, memory, latency, energy, privacy, and cost.',
    mentors: ['Maaz Amjad', 'Tara Salman'],
    domain: 'AI Systems & Efficiency',
    aiHpcBalance: 60,
    objective:
      'This project will investigate how agentic AI workflows can efficiently use GPU and HPC resources while balancing model quality, memory, latency, energy use, privacy, and cost.',
    benefits:
      'Students will gain hands-on experience with open-weight models, GPU computing, model deployment, quantization, batching, context management, and resource-aware inference. Using REPACSS, they will deploy small and medium-sized models and measure their quality, memory use, latency, and resource requirements, then investigate open research questions in resource estimation, model selection, and task routing. This prepares students to develop transparent and efficient AI systems using institutionally managed computing infrastructure and aligns with the goals of NSF’s National Artificial Intelligence Research Resource.',
    significance:
      'Agentic AI workflows can combine multiple models, tools, and retrieval components within a single task, creating new opportunities for efficient resource management. Large open-weight models can require substantial GPU memory, with additional resources needed for context, batching, concurrent agents, and key–value caches. This project will develop and evaluate a transparent framework for resource-aware inference that selects between small and large models based on task difficulty, data sensitivity, available memory, and latency requirements. Students will compare configurations using answer quality, memory use, latency, energy, and estimated cost per successful task rather than cost per token alone. Across multiple summer cohorts, the framework can be expanded to support more advanced model routing, resource allocation, and multi-agent scheduling.',
    phases: [
      {
        label: 'Phase 1',
        weeks: 'Weeks 1–3',
        weekStart: 1,
        weekEnd: 3,
        title: 'Model Selection and Basic Deployment',
        body: 'Students learn basic concepts of open-weight language models, model size, numerical precision, GPU memory, and inference. Working closely with graduate students and provided with examples and starter code, they select two or three small open-weight models, run them on REPACSS, and learn to record model-loading memory, response time, and supported context length.',
      },
      {
        label: 'Phase 2',
        weeks: 'Weeks 4–7',
        weekStart: 4,
        weekEnd: 7,
        title: 'Inference Experiments',
        body: 'Students compare the selected models at 16-, 8-, and 4-bit precision, studying how model size, quantization, prompt length, and batching affect answer quality, memory use, and response time using publicly available data.',
      },
      {
        label: 'Phase 3',
        weeks: 'Weeks 8–10',
        weekStart: 8,
        weekEnd: 10,
        title: 'Simple Model Routing and Evaluation',
        body: 'Students develop a rule-based router that sends easier tasks to a smaller model and harder tasks to a larger model, and compare this with using one model for every task — evaluating response quality, memory use, response time, and estimated computing cost, and identifying common failures.',
      },
    ],
    skills: ['GPU computing', 'Quantization & batching', 'Model deployment', 'Latency/energy measurement', 'Rule-based routing'],
    entryBarrier: 'Starter code, examples, and close work with graduate students support students new to model deployment.',
    deliverables: ['Resource-aware inference framework', 'Quality/memory/latency measurements across precisions', 'Rule-based model router', 'Findings presentation'],
  },
  {
    id: 9,
    slug: 'prompt-injection',
    title: 'Characterizing Prompt Injection Vulnerabilities in Large Language Models',
    short: 'Run large-scale HPC evaluations to determine which LLM factors — size, family, architecture — drive resilience to prompt injection.',
    mentors: ['Tara Salman', 'Maaz Amjad'],
    domain: 'AI Security',
    aiHpcBalance: 75,
    objective:
      'This project will investigate how large language model factors such as architecture, size, and overall family affect models’ resilience to prompt injection attacks, using HPC capabilities to run large-scale empirical evaluations while varying model factors and attack parameters.',
    benefits:
      'Students will have hands-on experience with state-of-the-art AI techniques, their security and safety, and HPC platforms. They will learn fundamentals of LLMs, prompt injection attacks, and LLM safety, and gain research experience and practical skills in Python, Linux, and GPU-enabled computing. They will design reproducible, open-source code for experiments that can be executed at scale on REPACSS, analyze experimental results, write reports and papers, and communicate findings in conferences or presentations.',
    significance:
      'LLMs have been integrated into search engines, virtual assistants, and coding assistants; as they interact with users in more contexts, they become more prone to attacks. Prompt injection — where malicious inputs are embedded in the prompt to manipulate model behavior or bypass policies — exploits the model’s inability to distinguish trusted prompts from adversarial ones. Existing benchmarks lack systematic evaluation across diverse attacks and LLMs, so it remains poorly understood how attacks interact with different models. The question of what LLM factors (size, family, architecture) contribute to resiliency against prompt injection remains largely unanswered; this project seeks answers by running large-scale experiments across diverse models on REPACSS.',
    phases: [
      {
        label: 'Phase 1',
        weeks: 'Weeks 1–3',
        weekStart: 1,
        weekEnd: 3,
        title: 'Background and Benchmark Selection',
        body: 'Students build a background in LLMs and the fundamentals of prompt injection attacks along with other LLM security and safety issues. They investigate existing prompt injection benchmarks to understand how attacks work and are evaluated, then choose a benchmark for the rest of the project, while receiving training in Linux, REPACSS access, and scalable experimental workflows.',
      },
      {
        label: 'Phase 2',
        weeks: 'Weeks 4–7',
        weekStart: 4,
        weekEnd: 7,
        title: 'Large-Scale Attack Campaigns',
        body: 'Students develop code that automatically and simultaneously runs a large number of prompt injection attacks against LLMs covering various sizes, families, and architectures, then measure attack performance and effects in terms of success rate and computational performance. REPACSS enables parallel execution across a broad range of model and attack configurations.',
      },
      {
        label: 'Phase 3',
        weeks: 'Weeks 8–10',
        weekStart: 8,
        weekEnd: 10,
        title: 'Statistical Analysis and Dissemination',
        body: 'Students statistically analyze results from different experiments to understand how model factors influence robustness, then summarize findings and prepare technical reports, presentations, posters, or a conference paper as time allows. Reproducible experimental code will be released open-source to support future AI security research.',
      },
    ],
    skills: ['LLM security & safety', 'Python', 'Linux & GPU computing', 'Large-scale experiment orchestration', 'Statistical analysis'],
    entryBarrier: 'Students begin with LLM and attack fundamentals plus Linux and cluster training before scaling experiments.',
    deliverables: ['Open-source experiment framework', 'Cross-model attack success measurements', 'Statistical analysis of resiliency factors', 'Reports / posters / possible conference paper'],
  },
];

/**
 * Three research thrusts used throughout the site to group the nine projects.
 * Color is carried by a validated 3-slot categorical palette; every colored
 * mark is also directly labeled, so identity is never color-alone.
 */
export type ThrustId = 'systems' | 'ai-systems' | 'trust';

export const thrusts: Record<ThrustId, { name: string; blurb: string; color: string; soft: string; projects: number[] }> = {
  systems: {
    name: 'HPC Systems & Performance',
    blurb:
      'Measuring, modeling, and predicting how real scientific workloads use a production cluster — telemetry, runtime prediction, and CPU/GPU trade-offs.',
    color: 'var(--c-1)',
    soft: 'var(--c-1-soft)',
    projects: [1, 2, 3],
  },
  'ai-systems': {
    name: 'Efficient & Applied AI Systems',
    blurb:
      'Building AI systems that run well on institutional infrastructure — retrieval-grounded assistants, clinical evidence agents, and resource-aware agentic inference.',
    color: 'var(--c-2)',
    soft: 'var(--c-2-soft)',
    projects: [4, 7, 8],
  },
  trust: {
    name: 'Security, Trust & Learning',
    blurb:
      'Studying how AI and HPC systems fail or mislead — energy-based denial of service, prompt injection resilience, and AI agents that teach rather than answer.',
    color: 'var(--c-3)',
    soft: 'var(--c-3-soft)',
    projects: [5, 6, 9],
  },
};

export const thrustOf = (id: number): ThrustId =>
  (Object.keys(thrusts) as ThrustId[]).find((t) => thrusts[t].projects.includes(id))!;

export const projectById = (id: number) => projects.find((p) => p.id === id)!;
