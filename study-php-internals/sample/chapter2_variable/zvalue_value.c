// 用zvalue_value这个union来保存变量的值，定义在Zend/zend.h

typedef union _zvalue_value {
    long lval;
    double dval;
    struct {
        char *val;
        int len;
    };
    HashTable *ht;
    zend_object_value obj;
} zvalue_value;
