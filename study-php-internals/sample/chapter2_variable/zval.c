// php通过zval结构体来保存变量，zval结构体在Zend/zend.h定义，定义如下

struct _zval_struct {
    zvalue_value value;
    zend_uint refcount_gc;
    zend_uchar type;
    zend_uchar is_ref_gc;
};
