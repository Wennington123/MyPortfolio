# -*- coding: utf-8 -*-
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_JUSTIFY
from reportlab.platypus import (SimpleDocTemplate, Paragraph, Spacer, Table,
                                TableStyle, HRFlowable, ListFlowable, ListItem)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import os

FONT_DIR = "/home/wdaquino/.local/share/flatpak/runtime/org.gnome.Platform/x86_64/50/660d809fffc2043792d550b7ae8abbb70ec4ec06524c709dbc230770b85a3e1b/files/share/fonts/dejavu"
pdfmetrics.registerFont(TTFont("DJ", os.path.join(FONT_DIR, "DejaVuSans.ttf")))
pdfmetrics.registerFont(TTFont("DJ-B", os.path.join(FONT_DIR, "DejaVuSans-Bold.ttf")))
pdfmetrics.registerFont(TTFont("DJ-I", os.path.join(FONT_DIR, "DejaVuSans-Oblique.ttf")))
from reportlab.pdfbase.pdfmetrics import registerFontFamily
registerFontFamily("DJ", normal="DJ", bold="DJ-B", italic="DJ-I", boldItalic="DJ-B")

PRIMARY = colors.HexColor("#0ea5b7")
DARK = colors.HexColor("#0f172a")
MUTED = colors.HexColor("#475569")
LIGHT = colors.HexColor("#f1f5f9")

def S(name, **kw):
    base = dict(fontName="DJ", leading=14, textColor=DARK)
    base.update(kw)
    return ParagraphStyle(name, **base)

def build(lang, out_path):
    if lang == "pt":
        st_name   = S("name", fontName="DJ-B", fontSize=18, textColor=DARK, spaceAfter=2, leading=21)
        st_title  = S("title", fontName="DJ-B", fontSize=12, textColor=PRIMARY, spaceAfter=6)
        st_contact= S("contact", fontSize=9, textColor=MUTED, spaceAfter=2)
        st_h2     = S("h2", fontName="DJ-B", fontSize=13, textColor=PRIMARY, spaceBefore=12, spaceAfter=4)
        st_body   = S("body", fontSize=10, leading=14, alignment=TA_JUSTIFY, spaceAfter=4)
        st_item   = S("item", fontSize=10, leading=13, spaceAfter=1)
        st_tag    = S("tag", fontSize=8.5, textColor=MUTED)
        st_small  = S("small", fontSize=8.5, textColor=MUTED, spaceAfter=1)
        name = "Wennington Dias Aquino"
        title = "Desenvolvedor Júnior"
        contacts = [
            'E-mail: <a href="mailto:wenningtondiasx25@gmail.com">wenningtondiasx25@gmail.com</a> &nbsp;|&nbsp; (74) 98821-7793',
            'LinkedIn: <a href="https://www.linkedin.com/in/wennington-dias-23201b325/">linkedin.com/in/wennington-dias-23201b325</a> &nbsp;|&nbsp; GitHub: <a href="https://github.com/Wennington123">github.com/Wennington123</a> &nbsp;|&nbsp; GitLab: <a href="https://gitlab.com/wenningtondiasx25">gitlab.com/wenningtondiasx25</a>',
            'Lattes: <a href="http://lattes.cnpq.br/9679218930309453">lattes.cnpq.br/9679218930309453</a> &nbsp;|&nbsp; Portfolio: <a href="https://getmep-study.vercel.app/">getmep-study.vercel.app</a>',
        ]
        summary = ("Desenvolvedor júnior apaixonado por tecnologia, com sólida bagagem acadêmica em "
                   "pesquisa e educação. Especializado em construir interfaces web acessíveis e dinâmicas, "
                   "unindo pensamento crítico, capacidade analítica e boas práticas de documentação. "
                   "Atua com desenvolvimento front-end e back-end, automação inteligente (IA/n8n/LangChain) "
                   "e análise de dados para pesquisa acadêmica.")
        h_skills = "Habilidades"
        h_proj = "Projetos em Destaque"
        h_cert = "Formação & Certificações (selecionadas)"
        skills = [
            ("Front-end", ["HTML5", "CSS3", "JavaScript", "React", "Vite", "Kotlin (Games)"]),
            ("Back-end & Dados", ["Python", "Python (IA Aplicada)", "Node.js", "R", "SQL", "Oracle Cloud (OCI)"]),
            ("IA & Automação", ["Claude Code", "OpenAI API", "Whisper AI", "Automação de Prompts",
                                  "Agentes de IA (LangGraph)", "n8n (Automação)", "LangChain", "Gemini",
                                  "Engenharia de Software com IA"]),
            ("Ferramentas", ["Git", "GitHub", "Vercel", "NPM/Yarn", "Figma", "Canva", "Word", "Microsoft"]),
            ("Pesquisa & Métodos", ["Iramuteq", "RStudio", "Quarto", "PRISMA 2020", "Revisão Sistemática"]),
            ("Soft Skills", ["Pesquisa Acadêmica", "Metodologia", "Comunicação",
                              "Trabalho em Equipe", "Aprendizado Contínuo"]),
        ]
        projects = [
            ("GetMep Study", "TypeScript, Python, JavaScript, R, Shiny",
             "Plataforma do Grupo de Estudos Teórico-Metodológicos em Pesquisa e Educação, com painel web interativo de análise de dados (PRISMA 2020)."),
            ("Wikiendum", "TypeScript, React, Vite, Node.js",
             "Dicionário colaborativo que mapeia a literatura acadêmica, centralizando múltiplas definições de termos das ciências humanas."),
            ("FlowStudio", "Python, Desktop (Windows)",
             "Ferramenta desktop para automatizar fluxogramas de revisão sistemática conforme a diretriz PRISMA 2020 (export PNG/SVG)."),
            ("FeatherTranskript", "Python, Whisper AI, Streamlit",
             "Transcritor de áudio gratuito e de alta precisão, com versão web otimizada via Streamlit."),
            ("Quarto Templates pt-BR", "JavaScript, Quarto, LaTeX, R",
             "Coleção de templates Quarto para pesquisadores brasileiros escreverem trabalhos em português."),
            ("Memória Silábica (Game)", "Construct 3, Pesquisa Científica",
             "Jogo de conscientização fonológica infantil baseado em pesquisa da Universidade de Pernambuco (UPE)."),
            ("PsyMap (GitLab)", "GitLab, JavaScript, Data Visualization",
             "Projeto de mapeamento e visualização de conhecimento em psicologia, hospedado no GitLab."),
        ]
        certs = [
            "Curso Engenharia de Software na Era da IA — Alura (jul/2026)",
            "Curso Gemini e Python: orquestrando LLMs com LangChain — Alura (jul/2026)",
            "Curso Agentes de IA com LangGraph — Alura (jul/2026)",
            "Curso n8n para Devs: workflows inteligentes — Alura (jul/2026)",
            "Curso Python: Inteligência Artificial Aplicada — Alura (jul/2026)",
            "Curso Git e GitHub — Alura (jul/2026)",
            "Curso Oracle Cloud Infrastructure (OCI) — Alura (jul/2026)",
            "Python Essencial: do Básico ao Intermediário — 60h (mar/2025)",
            "Inteligência Artificial: Fundamentos, Aplicações e Criatividade — IFSul (20h)",
            "Curso Kotlin Games — desenvolvimento de jogos",
        ]
        footer = "Currículo gerado a partir do portfólio pessoal · getmep-study.vercel.app"
    else:
        st_name   = S("name", fontName="DJ-B", fontSize=18, textColor=DARK, spaceAfter=2, leading=21)
        st_title  = S("title", fontName="DJ-B", fontSize=12, textColor=PRIMARY, spaceAfter=6)
        st_contact= S("contact", fontSize=9, textColor=MUTED, spaceAfter=2)
        st_h2     = S("h2", fontName="DJ-B", fontSize=13, textColor=PRIMARY, spaceBefore=12, spaceAfter=4)
        st_body   = S("body", fontSize=10, leading=14, alignment=TA_JUSTIFY, spaceAfter=4)
        st_item   = S("item", fontSize=10, leading=13, spaceAfter=1)
        st_tag    = S("tag", fontSize=8.5, textColor=MUTED)
        st_small  = S("small", fontSize=8.5, textColor=MUTED, spaceAfter=1)
        name = "Wennington Dias Aquino"
        title = "Junior Developer"
        contacts = [
            'E-mail: <a href="mailto:wenningtondiasx25@gmail.com">wenningtondiasx25@gmail.com</a> &nbsp;|&nbsp; +55 (74) 98821-7793',
            'LinkedIn: <a href="https://www.linkedin.com/in/wennington-dias-23201b325/">linkedin.com/in/wennington-dias-23201b325</a> &nbsp;|&nbsp; GitHub: <a href="https://github.com/Wennington123">github.com/Wennington123</a> &nbsp;|&nbsp; GitLab: <a href="https://gitlab.com/wenningtondiasx25">gitlab.com/wenningtondiasx25</a>',
            'Lattes: <a href="http://lattes.cnpq.br/9679218930309453">lattes.cnpq.br/9679218930309453</a> &nbsp;|&nbsp; Portfolio: <a href="https://getmep-study.vercel.app/">getmep-study.vercel.app</a>',
        ]
        summary = ("Junior developer passionate about technology, with a solid academic background in "
                  "research and education. Specialized in building accessible and dynamic web interfaces, "
                  "combining critical thinking, analytical skills and good documentation practices. Works "
                  "with front-end and back-end development, intelligent automation (AI/n8n/LangChain) and "
                  "data analysis for academic research.")
        h_skills = "Skills"
        h_proj = "Featured Projects"
        h_cert = "Education & Certifications (selected)"
        skills = [
            ("Front-end", ["HTML5", "CSS3", "JavaScript", "React", "Vite", "Kotlin (Games)"]),
            ("Back-end & Data", ["Python", "Python (AI Applied)", "Node.js", "R", "SQL", "Oracle Cloud (OCI)"]),
            ("AI & Automation", ["Claude Code", "OpenAI API", "Whisper AI", "Prompt Engineering",
                                  "AI Agents (LangGraph)", "n8n (Automation)", "LangChain", "Gemini",
                                  "AI Software Engineering"]),
            ("Tools", ["Git", "GitHub", "Vercel", "NPM/Yarn", "Figma", "Canva", "Word", "Microsoft"]),
            ("Research & Methods", ["Iramuteq", "RStudio", "Quarto", "PRISMA 2020", "Systematic Review"]),
            ("Soft Skills", ["Academic Research", "Methodology", "Communication",
                              "Teamwork", "Continuous Learning"]),
        ]
        projects = [
            ("GetMep Study", "TypeScript, Python, JavaScript, R, Shiny",
             "Platform of the Theoretical-Methodological Study Group in Research and Education, with an interactive web data-analysis panel (PRISMA 2020)."),
            ("Wikiendum", "TypeScript, React, Vite, Node.js",
             "Collaborative dictionary mapping academic literature, centralizing multiple definitions of humanities terms."),
            ("FlowStudio", "Python, Desktop (Windows)",
             "Desktop tool to automate systematic-review flowcharts per the PRISMA 2020 guideline (PNG/SVG export)."),
            ("FeatherTranskript", "Python, Whisper AI, Streamlit",
             "Free, high-precision audio transcriber, with an optimized Streamlit web version."),
            ("Quarto Templates pt-BR", "JavaScript, Quarto, LaTeX, R",
             "Collection of Quarto templates for Brazilian researchers writing in Portuguese."),
            ("Syllabic Memory (Game)", "Construct 3, Scientific Research",
             "Children's phonological-awareness game based on research at the University of Pernambuco (UPE)."),
            ("PsyMap (GitLab)", "GitLab, JavaScript, Data Visualization",
             "Knowledge mapping and visualization project in psychology, hosted on GitLab."),
        ]
        certs = [
            "AI Software Engineering course — Alura (Jul/2026)",
            "Gemini & Python: orchestrating LLMs with LangChain — Alura (Jul/2026)",
            "AI Agents with LangGraph — Alura (Jul/2026)",
            "n8n for Devs: intelligent workflows — Alura (Jul/2026)",
            "Python: Applied Artificial Intelligence — Alura (Jul/2026)",
            "Git & GitHub — Alura (Jul/2026)",
            "Oracle Cloud Infrastructure (OCI) — Alura (Jul/2026)",
            "Python Essentials: Beginner to Intermediate — 60h (Mar/2025)",
            "Artificial Intelligence: Fundamentals, Applications & Creativity — IFSul (20h)",
            "Kotlin Games — game development",
        ]
        footer = "Resume generated from the personal portfolio · getmep-study.vercel.app"

    doc = SimpleDocTemplate(out_path, pagesize=A4,
                            leftMargin=18*mm, rightMargin=18*mm,
                            topMargin=16*mm, bottomMargin=16*mm,
                            title="Curriculum - Wennington Dias Aquino",
                            author="Wennington Dias Aquino")
    W = doc.width
    E = []
    E.append(Paragraph(name, st_name))
    E.append(Paragraph(title, st_title))
    for c in contacts:
        E.append(Paragraph(c, st_contact))
    E.append(HRFlowable(width="100%", thickness=1.2, color=PRIMARY, spaceBefore=6, spaceAfter=6))
    E.append(Paragraph(h_skills, st_h2))
    rows = [[Paragraph(f"<b>{cat}</b>", st_item), Paragraph(", ".join(its), st_item)] for cat, its in skills]
    t = Table(rows, colWidths=[42*mm, W-42*mm])
    t.setStyle(TableStyle([
        ("VALIGN", (0,0), (-1,-1), "TOP"),
        ("LINEBELOW", (0,0), (-1,-2), 0.4, LIGHT),
        ("TOPPADDING", (0,0), (-1,-1), 3),
        ("BOTTOMPADDING", (0,0), (-1,-1), 3),
    ]))
    E.append(t)
    E.append(Paragraph(h_proj, st_h2))
    for ptitle, stack, desc in projects:
        E.append(Paragraph(f"<b>{ptitle}</b> &nbsp;<font size=8 color='#0ea5b7'>{stack}</font>", st_item))
        E.append(Paragraph(desc, st_small))
    E.append(Paragraph(h_cert, st_h2))
    E.append(ListFlowable(
        [ListItem(Paragraph(c, st_small), leftIndent=6) for c in certs],
        bulletType="bullet", start="•", leftIndent=10, bulletColor=PRIMARY))
    E.append(Spacer(1, 6))
    E.append(HRFlowable(width="100%", thickness=0.6, color=LIGHT, spaceAfter=4))
    E.append(Paragraph(footer, st_tag))
    doc.build(E)
    print("Gerado:", out_path, os.path.getsize(out_path), "bytes")

DEST = "/home/wdaquino/Documentos"
build("pt", os.path.join(DEST, "Curriculo_Wennington_Dias_Aquino_PTBR.pdf"))
build("en", os.path.join(DEST, "Curriculum_Wennington_Dias_Aquino_EN.pdf"))
