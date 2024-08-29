import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import MIcon_1 from 'react-native-vector-icons/MaterialCommunityIcons';
import FIcon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({navigation}) => {
  return (
    <>
      <View>
        <View style={styles.toptext}>
          <Text>Hello,</Text>
          <Text style={{fontSize: 27, fontWeight: 'bold'}}> John doe</Text>
        </View>
        <View style={styles.lefticon}>
          <TouchableOpacity style={styles.menu}>
            <MIcon_1 name="menu" size={33} style={styles.icon1} />
          </TouchableOpacity>
        </View>
        <View style={styles.main}>
          <TouchableOpacity style={styles.search_btn}>
            <TextInput
              placeholder="Search Course "
              style={styles.serach}
              placeholderTextColor={'#000'}
            />
            <FIcon name="search" style={styles.icon_1} />
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View style={styles.categoriesmain}>
            <TouchableOpacity>
              <View style={styles.categories1}>
                <Text style={{color: 'white'}}> Copywriting</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.categories2}>
                <Text style={{color: 'white'}}> UX/UI</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.categories3}>
                <Text style={{color: 'white'}}> Branding</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.categories4}>
                <Text style={{color: 'white'}}> All Topic</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <View style={styles.bannerimg}>
              <Image source={require('../../../assets/banner.png')} />
            </View>
          </View>
          <View style={styles.maintext}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
            
              Popular Course
            </Text>
          </View>
          <View style={{justifyContent:'flex-end',alignItems:'flex-end',marginRight:30,marginTop:-20,}}>
            <TouchableOpacity>
            <Text style={{fontWeight:'bold',}}> See All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal style={{height: 250, gap: 10}}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.course} onPress={()=> navigation.navigate('CourseDetails')}>
                <Image
                  source={require('../../../assets/banner2.png')}
                  style={styles.img}
                />
                <TouchableOpacity >
                  <View style={styles.col}>
                    <Text style={{fontWeight: 'bold', left: 20, top: 10}}>
                      UI/UX Design Principal
                    </Text>
                    <Text style={{marginLeft: 17, top: 10}}>
                   
                      21 Sep - 27 Sep
                    </Text>
                    <View style={styles.coursetext}>
                      <Text style={{marginLeft: 20, top: 10, fontSize: 10}}>
                        UI/UX Design
                      </Text>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 20,
                       
                        }}>
                        Free
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </TouchableOpacity>

              <TouchableOpacity style={styles.course_1}>
                <Image
                  source={require('../../../assets/banner2.png')}
                  style={styles.img}
                />
                <TouchableOpacity>
                  <View style={styles.col_1}>
                    <Text style={{fontWeight: 'bold', left: 20, top: 10}}>
                      UI/UX Design Principal
                    </Text>
                    <Text style={{marginLeft: 17, top: 10}}>
                  
                      21 Sep - 27 Sep
                    </Text>
                    <View style={styles.coursetext}>
                      <Text style={{marginLeft: 20, top: 10, fontSize: 10}}>
                        UI/UX Design
                      </Text>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 20,
                          
                        }}>
                        Free
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </TouchableOpacity>

              <TouchableOpacity style={styles.course_2}>
                <Image
                  source={require('../../../assets/banner2.png')}
                  style={styles.img}
                />
                <TouchableOpacity>
                  <View style={styles.col_2}>
                    <Text style={{fontWeight: 'bold', left: 20, top: 10}}>
                      UI/UX Design Principal
                    </Text>
                    <Text style={{marginLeft: 17, top: 10}}>
                    
                      21 Sep - 27 Sep
                    </Text>
                    <View style={styles.coursetext}>
                      <Text style={{marginLeft: 20, top: 10, fontSize: 10}}>
                        UI/UX Design
                      </Text>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 20,
                     
                        }}>
                        Free
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </TouchableOpacity>

              <TouchableOpacity style={styles.course_3}>
                <Image
                  source={require('../../../assets/banner2.png')}
                  style={styles.img}
                />
                <TouchableOpacity>
                  <View style={styles.col_3}>
                    <Text style={{fontWeight: 'bold', left: 20, top: 10}}>
                      UI/UX Design Principal
                    </Text>
                    <Text style={{marginLeft: 17, top: 10}}>
                    
                      21 Sep - 27 Sep
                    </Text>
                    <View style={styles.coursetext}>
                      <Text style={{marginLeft: 20, top: 10, fontSize: 10}}>
                        UI/UX Design
                      </Text>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 20,
                        
                        }}>
                        Free
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
            
          </ScrollView>

          <View style={{flexDirection:'row',gap:250,marginTop:10,}}>

            <Text style={{fontWeight:'bold',marginLeft:20,}}> For Yu </Text>
            <Text style={{fontWeight:'bold',}} > See All</Text>
          </View>
          <View>
            


          </View>
        </ScrollView>

      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  toptext: {
    marginLeft: 25,
    marginTop: 40,
  },
  menu: {
    width: 45,
    height: 45,
    borderWidth: 2,
    borderRadius: 50,
  },
  icon1: {
    marginLeft: 5,
  },
  lefticon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: -35,
    marginLeft: 270,
  },
  textinput: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 100,
    width: '70%',
    backgroundColor: 'white',
    marginLeft: 20,
  },
  serach: {
    paddingLeft: 15,
  },
  search_btn: {
    width: 350,
    borderWidth: 2,
    borderRadius: 20,
    left: 20,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  icon_1: {
    fontSize: 20,
    color: '#000',
    top: 14,
    left: 190,
  },
  main: {
    marginTop: 50,
  },
  categories1: {
    backgroundColor: '#FF4E6E',
    width: 110,
    height: 25,
    borderRadius: 15,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  categories2: {
    backgroundColor: '#FF4E6E',
    width: 50,
    borderRadius: 20,
    height: 25,
  },
  categories3: {
    backgroundColor: '#FF4E6E',
    width: 80,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 15,
    height: 25,
  },
  categories4: {
    backgroundColor: '#FF4E6E',
    width: 80,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    height: 25,
    borderRadius: 15,
  },
  categoriesmain: {
    flexDirection: 'row',
    gap: 10,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  bannerimg: {
    marginLeft: 30,
  },
  maintext: {
    marginLeft: 20,
    marginTop: 20,
  },
  course: {
    width: 220,
    height: 180,
    backgroundColor: '#8EC7FD',
    top: 20,
    left: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  coursetext: {
    flexDirection: 'row',
    gap: 70,
  },
  col: {
    backgroundColor: '#dbd9d9',
    width: 220,
    height: 90,
    top: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  img: {
    alignSelf: 'center',
    top: 20,
    height: 100,
  },
  course_1: {
    width: 220,
    height: 180,
    backgroundColor: '#8EC7FD',
    top: 20,
    left: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginLeft:10,
  },
  col_1: {
    backgroundColor: '#dbd9d9',
    width: 220,
    height: 90,
    top: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    
  },
  course_2: {
    width: 220,
    height: 180,
    backgroundColor: '#8EC7FD',
    top: 20,
    left: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginLeft:10,
  },
  col_2: {
    backgroundColor: '#dbd9d9',
    width: 220,
    height: 90,
    top: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    
  },
  course_3: {
    width: 220,
    height: 180,
    backgroundColor: '#8EC7FD',
    top: 20,
    left: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginLeft:10,
  },
  col_3: {
    backgroundColor: '#dbd9d9',
    width: 220,
    height: 90,
    top: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    
  },
});
