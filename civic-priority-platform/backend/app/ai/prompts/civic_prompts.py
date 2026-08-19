CLASSIFICATION_PROMPT = """
Classify the following citizen issue into one concise civic category.

Issue:
{text}

Return only the category.
""".strip()


ANALYSIS_PROMPT = """
Analyze this citizen issue for civic decision support.

Issue:
{text}

Category:
{issue_type}

Identify:
1. Core problem
2. Likely affected population
3. Urgency
4. Relevant development concern

Keep the response concise and factual.
""".strip()
