import React from 'react';
import {AppModal} from './AppModal';
import {
  Button,
  Caption,
  Headline,
  IconButton,
  Paragraph,
  Subheading,
  Title,
} from 'react-native-paper';
import {ScrollView, View} from 'react-native';

export const HowToPlayModal = (props: {
  visible: boolean;
  onDismiss(): void;
}) => {
  return (
    <AppModal
      visible={props.visible}
      onDismiss={() => props.onDismiss()}
      children={
        <ScrollView>
          <Headline>Descriere</Headline>
          {/*<Caption>Caption</Caption>*/}
          {/*<Paragraph>Paragraph</Paragraph>*/}

          {/*<Subheading>Subheading</Subheading>*/}

          {/*<Title>Title</Title>*/}
          <Paragraph>
            Numărul de jucători de la 3 persoane, nelimitat. Un cuvânt sau o
            frază este afișată. Un jucător trebuie să arate misterul fără
            indicii și obiecte, folosindu-se doar de spiritul și ingeniozitatea
            sa. Participantul poate folosi doar expresii faciale, posturi,
            gesturi.
          </Paragraph>

          <Headline>Reguli</Headline>
          <Paragraph>
            1. Este interzisă pronunțarea oricăror fraze, puteți folosi doar
            gesturi, poze și expresii faciale.
          </Paragraph>
          <Paragraph>
            2. Nu puteți arăta ce cuvântul sau fraza scrisă.
          </Paragraph>
          <Paragraph>
            3. Nu folosiți obiecte străine sau îndreptați-le.
          </Paragraph>
          <Paragraph>4. Este interzisă pronunțarea buzelor ascunse.</Paragraph>
          <Paragraph>
            5. Un cuvânt este considerat dezvăluit dacă este pronunțat exact așa
            cum este scris.
          </Paragraph>

          <Headline>Gesturi speciale</Headline>
          <Paragraph>
            1. În primul rând, jucătorul arată cu degetele câte cuvinte sunt
            afișate.
          </Paragraph>
          <Paragraph>2. Crucea cu mâinile tale înseamnă „uităm”.</Paragraph>
          <Paragraph>
            3. Mișcările circulare cu mâna sau palma spun că trebuie să
            selectați sinonime, răspunsul este aproape.
          </Paragraph>
          <IconButton
            onPress={props.onDismiss}
            icon={'window-close'}
            style={{alignSelf: 'center'}}
          />
        </ScrollView>
      }
    />
  );
};
