SOURCE_MAIN := Main.java
OBJECT_MAIN := $(subst .java,.class,$(SOURCE_MAIN))

SOURCE_PHURE := Phure.java
OBJECT_PHURE := $(subst .java,.class,$(SOURCE_PHURE))

$(OBJECT_MAIN) : $(SOURCE_MAIN) $(OBJECT_PHURE)
	javac $(<)

$(OBJECT_PHURE) : $(SOURCE_PHURE)
	javac $(^)
