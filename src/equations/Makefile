TEX_V02 = model-equations-v0.2.tex
PDF_V02 = model-equations-v0.2.pdf

TEX_V01 = model-equations-v0.1.tex
PDF_V01 = model-equations-v0.1.pdf

.PHONY: all v01 v02 clean

all: v02

v02: $(PDF_V02)

$(PDF_V02): $(TEX_V02)
	pdflatex -interaction=nonstopmode $(TEX_V02)
	pdflatex -interaction=nonstopmode $(TEX_V02)
	pdflatex -interaction=nonstopmode $(TEX_V02)

v01: $(PDF_V01)

$(PDF_V01): $(TEX_V01)
	pdflatex -interaction=nonstopmode $(TEX_V01)
	pdflatex -interaction=nonstopmode $(TEX_V01)

clean:
	rm -f *.aux *.log *.out *.toc
